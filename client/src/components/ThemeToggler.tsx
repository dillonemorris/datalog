import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useMedia } from '../hooks/useMedia'
import { Theme } from '../types'
import { THEMES } from '../utils/constants'
import { Moon } from './icons/Moon'
import { Sun } from './icons/Sun'

const icons = {
  [THEMES.DARK]: Moon,
  [THEMES.LIGHT]: Sun,
}

export const ThemeToggler = () => {
  const [isDarkModeOn, setDarkModeOn] = useDarkMode()
  const theme: Theme = isDarkModeOn ? 'dark' : 'light'
  const Icon = icons[theme]

  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  const toggleIsDarkModeOn = React.useCallback(() => {
    setDarkModeOn((v) => !v)
  }, [setDarkModeOn])

  return (
    <button onClick={toggleIsDarkModeOn}>
      <Icon />
    </button>
  )
}

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled')
  const prefersDarkMode = usePrefersDarkMode()
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode

  return [enabled, setEnabledState]
}

const usePrefersDarkMode = () => {
  return useMedia({
    queries: ['(prefers-color-scheme: dark)'],
    values: [true],
    defaultValue: false,
  })
}
