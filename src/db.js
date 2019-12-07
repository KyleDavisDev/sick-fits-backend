// This file connects to the remote PrismaDB and give us
// the ability to query it with JS.
const { Primsa } = require("prisma-binding");

const db = new Primsa({
  typeDef: "./generated/prisma.graphql",
  endPoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
