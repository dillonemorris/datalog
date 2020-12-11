import { client } from './utils/api-client'

export const fetchCategories = () => client(`categories`).then((data) => data)

export const fetchCategory = (category: string) =>
  client(`entries?category=${category}`)
