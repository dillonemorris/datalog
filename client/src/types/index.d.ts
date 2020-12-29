import { THEMES } from '../utils/constants'

type Category = { title: string }

export type Categories = Category[]

export type Entry = {
  title: string
  category: string
  description: string
  authRequired: boolean
  https: boolean
  supportsCors: boolean
  link: string
}

export type Entries = {
  entries: Entry[]
}

type RouteParams = {
  category: string
}

type ThemeVals = keyof typeof THEMES
type Theme = typeof THEMES[ThemeVals]
