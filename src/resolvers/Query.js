const Query = {
  items: async function(parent, args, ctx, info) {
    const items = await ctx.db.query.items();

    return items;
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
