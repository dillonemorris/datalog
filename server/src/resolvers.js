const { paginateResults } = require("./utils");

module.exports = {
  Query: {
    entries: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allEntries = await dataSources.api.getAllEntries();
      // TODO: Accept filters arg from client
      const filteredEntries = allEntries.filter((e) => e.https);
      const entries = paginateResults({
        after,
        pageSize,
        results: filteredEntries,
      });

      return {
        entries,
        cursor: entries.length ? entries[entries.length - 1].cursor : null,
        // if the cursor at the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: entries.length
          ? entries[entries.length - 1].cursor !==
            allEntries[allEntries.length - 1].cursor
          : false,
      };
    },
  },
};
