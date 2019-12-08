const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/Mutation.js");
const Query = require("./resolvers/Query.js");
const db = require("./db");

//Creat the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
