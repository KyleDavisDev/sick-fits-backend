const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const moment = require("moment");

const { transport, makeANiceEmail } = require("../mail.js");
const { hasPermission } = require("../utils");

const Query = {
  items: async function(parent, args, ctx, info) {
    const items = await ctx.db.query.items({ ...args });

    return items;
  },

  itemsConnection: async function(parent, args, ctx, info) {
    const itemsConnection = await ctx.db.query.itemsConnection(
      { where: {} },
      info
    );

    return itemsConnection;
  },

  item: async function(parent, args, ctx, info) {
    const item = await ctx.db.query.item(
      { where: { id: args.where.id } },
      info
    );

    return item;
  },

  me: async function(parent, args, ctx, info) {
    // Check if there is a current userID
    if (!ctx.request.userId) {
      return null;
    }

    // find user
    const user = await ctx.db.query.user(
      { where: { id: ctx.request.userId } },
      info
    );

    const [cart] = await ctx.db.query.carts(
      {
        where: {
          user: { id: ctx.request.userId },
          AND: [{ isActive: true }]
        },
        orderBy: "updated_DESC"
      },
      "{ created id items { id quantity item { id price image title description }}}"
    );

    // combine user and cart
    const results = { ...user, cart };

    // return to client
    return results;
  },

  signIn: async function(parent, args, ctx, info) {
    // 1. Check if user with that email exists
    args.email = args.email.toLowerCase();
    const user = await ctx.db.query.user({ where: { email: args.email } });

    if (!user) {
      throw new Error("Invalid username or password");
    }

    // 2. Check if password is correct
    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error("Invalid username or password");
    }

    // 3. Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // 4. Set cookie with token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 day token
    });

    // 5. Return the user
    return user;
  },

  requestReset: async function(parent, args, ctx, info) {
    // 1. Check if real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error("Cannot find user");
    }

    // 2. Set expiry on user
    const resetToken = (await promisify(randomBytes)(20)).toString("hex");
    const resetTokenExpire = Date.now() + 1000 * 60 * 60; // 1 hr
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpire }
    });

    // 3. Send email
    const mailResponse = await transport.sendMail({
      from: "kdd@kdd.com",
      to: user.email,
      subject: "Reset password",
      html: makeANiceEmail(
        `Your password reset token is here!
        \n\n
         <a href="${process.env.FRONTEND_URL}/resetpassword?resetToken=${resetToken}">Click here to reset password</a>`
      )
    });

    // 4. Return message
    return { message: "Thanks" };
  },

  users: async function(parent, args, ctx, info) {
    // 1. Check if logged in
    if (!ctx.request.userId || !ctx.request.user) {
      throw new Error("You must be logged in for this action!");
    }
    // 3. Check for permissions
    hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]);
    // 4. Return users
    return ctx.db.query.users({}, info);
  },

  order: async function(parent, args, ctx, info) {
    // 1. Make sure they are logged in
    if (!ctx.request.userId || !ctx.request.user) {
      throw new Error("You must be logged in to see your orders!");
    }

    // 2. Query the requested order
    const order = await ctx.db.query.order({ where: { id: args.id } }, info);
    if (!order) {
      return null;
    }

    // 3. check user permission
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionsToSeeOrder = ctx.request.user.permissions.includes(
      "ADMIN"
    );
    if (!ownsOrder || !hasPermissionsToSeeOrder) {
      throw new Error("You are not allowed to see this order, bud!");
    }

    // 4. return order
    return order;
  },

  orders: async function(parent, args, ctx, info) {
    // 1. Make sure user logged in
    if (!ctx.request.userId || !ctx.request.user) {
      throw new Error("You must be logged in to see your orders!");
    }

    // 2. Return orders for that user
    return ctx.db.query.orders(
      { where: { user: { id: ctx.request.userId } } },
      info
    );
  }
};

module.exports = Query;
