const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

  signIn: async function(parent, args, ctx, info) {
    // 1. Check if user with that email exists
    args.email = args.email.toLowerCase();
    const user = ctx.db.query.user({ where: { email: args.email } });

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
  }
};

module.exports = Mutation;
