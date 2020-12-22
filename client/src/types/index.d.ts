import { THEMES } from '../utils/constants'

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

export type Entries = {
  count: number
  entries: Entry[]
}

export type Category = {
  count: number
  entries: Entry[]
}

type RouteParams = {
  category: string
}

type ThemeVals = keyof typeof THEMES
type Theme = typeof THEMES[ThemeVals]
