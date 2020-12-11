export type Categories = string[]

export type Entry = {
  API: string
  Category: string
  Description: string
  Auth: string
  HTTPS: boolean
  Cors: string
  Link: string
}

export type Category = {
  count: number
  entries: Entry[]
}

type RouteParams = {
  category: string
}
