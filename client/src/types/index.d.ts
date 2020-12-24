import { THEMES } from '../utils/constants'

export type Categories = string[]

export type Entry = {
  title: string
  category: string
  description: string
  auth: string
  https: boolean
  cors: string
  link: string
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
