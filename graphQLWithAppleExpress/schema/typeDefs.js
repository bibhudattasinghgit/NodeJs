const { gql } = require("apollo-server-express");

const typeDefs = gql`
type users {
    name: String!
    age: Int!
    company: String!
}

#Queries

type Query {
    getAllUsers: [users]!
}

#mutation

`;



module.exports = {typeDefs};
