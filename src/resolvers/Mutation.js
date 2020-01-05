const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");

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
    const item = await ctx.db.query.item({ where }, `{ id title}`);
    // 2. Check permissions

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
  }
};

module.exports = Mutation;
