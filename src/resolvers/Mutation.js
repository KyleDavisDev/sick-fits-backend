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
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id }
      },
      info
    );
  }
};

module.exports = Mutation;
