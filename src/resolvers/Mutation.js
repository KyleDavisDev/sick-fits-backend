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
  }
};

module.exports = Mutation;
