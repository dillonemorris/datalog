const { paginateResults } = require("./utils");

module.exports = {
  Query: {
    entries: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allEntries = await dataSources.api.getAllEntries();
      // TODO: Accept filters arg from client
      // const filters = [
      //   { filter: "https", condition: true },
      //   { filter: "cors", condition: "yes" },
      // ];

      // const filteredEntries = allEntries.filter((e) => {
      //   return filters.every(
      //     ({ filter, condition }) => e[filter] === condition
      //   );
      // });

      const entries = paginateResults({
        after,
        pageSize,
        results: allEntries,
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
    entry: async (_, { title }, { dataSources }) => {
      const entry = await dataSources.api.getEntryByTitle(title);
      return entry;
    },
  },
};
