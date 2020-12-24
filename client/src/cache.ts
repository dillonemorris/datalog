import { InMemoryCache, Reference } from '@apollo/client'

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        entries: {
          keyArgs: false,
          merge(existing, incoming) {
            let entries: Reference[] = []
            if (existing && existing.entries) {
              entries = entries.concat(existing.entries)
            }
            if (incoming && incoming.entries) {
              entries = entries.concat(incoming.entries)
            }
            return {
              ...incoming,
              entries,
            }
          },
        },
      },
    },
  },
})
