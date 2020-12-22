const { gql } = require("apollo-server");

const typeDefs = gql`
  type Entry {
    api: String
    category: String
    description: String
    auth: String
    https: Boolean
    cors: String
    link: String
  }

  type Query {
    entries(pageSize: Int, after: String): EntryConnection!
  }

  type EntryConnection {
    cursor: String!
    hasMore: Boolean!
    entries: [Entry]!
  }
`;

module.exports = typeDefs;
