module.exports = {
  Query: {
    entries: async (_, __, { dataSources }) => {
      const allEntries = await dataSources.api.getAllEntries();

      return allEntries;
    },
    categories: async (_, __, { dataSources }) => {
      const categories = await dataSources.api.getCategories();
      return categories;
    },
    entriesByCategory: async (_, { category }, { dataSources }) => {
      const entriesByCategory = await dataSources.api.getEntriesByCategory(
        category
      );
      return entriesByCategory;
    },
  },
};
