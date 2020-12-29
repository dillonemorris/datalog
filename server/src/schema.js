const { gql } = require("apollo-server");

const typeDefs = gql`
  type Entry {
    title: String
    category: String
    description: String
    authRequired: Boolean
    https: Boolean
    supportsCors: Boolean
    link: String
  }

  type Category {
    title: String
  }

  type Query {
    entries: [Entry]!
    categories: [Category]!
    entriesByCategory(category: String): [Entry]!
  }
`;

module.exports = typeDefs;
