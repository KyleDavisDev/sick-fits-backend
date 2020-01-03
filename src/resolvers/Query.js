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
    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info);
  }
};

module.exports = Query;
