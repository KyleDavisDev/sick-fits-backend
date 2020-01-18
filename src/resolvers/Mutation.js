const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { hasPermission } = require("../utils");
const moment = require("moment");

const Mutation = {
  createItem: async function(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged into to create an item!");
    }

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // create relationship to user
          user: { connect: { id: ctx.request.userId } },
          // rest of data
          ...args
        }
      },
      info
    );

    return item;
  },
  updateItem: async function(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged into to update an item!");
    }

    const updates = { ...args };

    delete updates.id;

    // run update method
    return await ctx.db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id }
      },
      info
    );
  },

  deleteItem: async function(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged into to delete an item!");
    }

    const where = { id: args.id };
    // 1. Find the item
    const item = await ctx.db.query.item({ where }, `{ id title user {id}}`);

    // 2. Check permissions
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permis => {
      return ["ADMIN", "ITEMDELETE"].includes(permis);
    });

    if (!ownsItem && !hasPermissions) {
      throw new Error("You do not have permissions to do that!");
    }

    // 3. Delete it
    return await ctx.db.mutation.deleteItem({ where }, info);
  },

  createNewUser: async function(parent, args, ctx, info) {
    // First.Last@email.com ==> first.last@email.com
    args.email = args.email.toLowerCase();

    // Hash password
    const password = await bcrypt.hash(args.password, 10);

    // create user
    const user = await ctx.db.mutation.createUser(
      { data: { ...args, password, permissions: { set: ["USER"] } } },
      info
    );

    // create JWT
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // set jwt to cookie
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 day token
    });

    // Finally return
    return user;
  },

  signOut: async function(parent, args, ctx, info) {
    // remove token cookie
    ctx.response.clearCookie("token");

    return { message: "Goodbye!" };
  },

  resetPassword: async function(parent, args, ctx, info) {
    // 1. Check if passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error("Passwords do not match");
    }

    // 2. Check if it is a legit reset token
    // 3. Check for expiration
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpire_gte: Date.now() - 1000 * 60 * 60
      }
    });
    if (!user) {
      throw new Error("This token is either invalid or expired!");
    }

    // 4. Hash new password
    const hashPassword = await bcrypt.hash(args.password, 10);

    // 5. Update user password and cleanup
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { id: user.id },
      data: { password: hashPassword, resetToken: null, resetTokenExpire: null }
    });

    // 6. Generate new JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);

    // 7. set JWT as cookie
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 day token
    });

    // 8. Return new user
    return updatedUser;
  },

  updatePermissions: async function(parent, args, ctx, info) {
    // 1. Check if user is logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to update a user!");
    }

    // 2. Check permission
    hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]);

    // 4. Update
    return ctx.db.mutation.updateUser(
      {
        where: { id: args.userId },
        data: { permissions: { set: args.permissions } }
      },
      info
    );
  },

  addToCart: async function(parent, args, ctx, info) {
    // 1. Make sure signed in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to update a user!");
    }
    // get the unix time
    const curTime = moment().unix();

    // 2. query the current cart
    const [cart] = await ctx.db.query.carts(
      {
        where: {
          user: { id: ctx.request.userId },
          // one day less than current time
          AND: [{ updated_gte: curTime - 60 * 60 * 24 }]
        },
        orderBy: "updated_DESC"
      },
      "{ created id items { id quantity item { id }}}"
    );

    // if no carts found, create cart and include first item
    if (!cart) {
      const newCartItem = await ctx.db.mutation.createCartItem({
        data: {
          quantity: 1,
          item: {
            connect: { id: args.id }
          }
        }
      });

      return ctx.db.mutation.createCart(
        {
          data: {
            user: { connect: { id: ctx.request.userId } },
            items: { connect: { id: newCartItem.id } },
            created: curTime,
            updated: curTime
          }
        },
        info
      );
    }

    // 3. Check if item already exists in cart
    let doesItemExistInCart = false;
    let cartItem;
    for (let i = 0, len = cart.items.length; i < len; i++) {
      // look for a match
      if (cart.items[i].id === args.id) {
        doesItemExistInCart = true;
        cartItem = cart.items[i];
        break;
      }
    }

    // 4. Incriment count
    if (doesItemExistInCart) {
      await ctx.db.mutation.updateCartItem({
        data: { quantity: cartItem.quantity + 1 },
        where: { id: cartItem.id }
      });

      await ctx.db.mutation.updateCart({
        data: { updated: curTime },
        where: { id: cart.id }
      });

      return ctx.db.query.cart({ where: { id: cart.id } }, info);
    }

    // 5. or add item to cart
    const newCartItem = await ctx.db.mutation.createCartItem({
      data: {
        quantity: 1,
        item: {
          connect: { id: args.id }
        }
      }
    });
    return ctx.db.mutation.updateCart(
      {
        data: {
          items: { connect: { id: newCartItem.id } },
          updated: curTime
        },
        where: { id: cart.id }
      },
      info
    );
  },

  removeFromCart: async function(parent, args, ctx, info) {
    // 1. Make sure signed in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to update a user!");
    }
    // get the unix time
    const curTime = moment().unix();

    // 2. query the current cart
    const [cart] = await ctx.db.query.carts(
      {
        where: {
          user: { id: ctx.request.userId },
          // one day less than current time
          AND: [{ updated_gte: curTime - 60 * 60 * 24 }]
        },
        orderBy: "updated_DESC"
      },
      "{ created id items { id quantity item { id }}}"
    );

    if (!cart) {
      throw new Error("No cart found");
    }

    // get the cartitem
    const cartItem = cart.items.find(item => item.id === args.id);

    if (!cartItem) {
      throw new Error("Could not find this item on your cart");
    }

    const updatedCart = await ctx.db.mutation.deleteCartItem(
      {
        where: { id: args.id }
      },
      info
    );

    return updatedCart;
  }
};

module.exports = Mutation;
