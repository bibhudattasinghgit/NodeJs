const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");
const express = require("express");

const app = express();

const server = new ApolloServer({ typeDefs,resolvers });

server.applyMiddleware({ app });

app.listen({port: 3000},() => {
    console.log("SERVER IS STARTED PORT:3000");
});









