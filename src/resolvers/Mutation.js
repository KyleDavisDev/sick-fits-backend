const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");

const Mutation = {
  createItem: async function(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);

    return item;
  },
  updateItem: async function(parent, args, ctx, info) {
    // TODO: Check if they are logged in

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
    // TODO: Check if they are logged in

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

    console.log(res);

    return { message: "Thanks" };

    // 3. Send email
  }
};

module.exports = Mutation;
