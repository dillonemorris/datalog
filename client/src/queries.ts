import { client } from './utils/api-client'

export const fetchEntries = () => client(`entries`).then((data) => data)

// export const fetchCategory = (category: string) => {
//   const formattedCategory = category.split(' ')[0]

//   return client(`entries`)
//     .then((data) => data)
//     .catch((error) => console.error(error))
// }
