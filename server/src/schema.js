const { gql } = require("apollo-server");

const typeDefs = gql`
  type Entry {
    title: String
    category: String
    description: String
    auth: String
    https: Boolean
    cors: String
    link: String
  }

  type Query {
    entries(pageSize: Int, after: String): EntryConnection!
    entry(title: String): Entry!
  }

  type EntryConnection {
    cursor: String
    hasMore: Boolean!
    entries: [Entry]!
  }
`;

module.exports = typeDefs;
