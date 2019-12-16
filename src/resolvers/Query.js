const Query = {
  items: async function(parent, args, ctx, info) {
    const items = await ctx.db.query.items();

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
  }
};

module.exports = Query;
