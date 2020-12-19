import React from 'react'

type useMediaArgs = {
  queries: string[]
  values: boolean[]
  defaultValue: boolean
}

export const useMedia = ({ queries, values, defaultValue }): useMediaArgs => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q))

  const getValue = React.useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches)
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }, [mediaQueryLists, defaultValue, values])

  const [value, setValue] = React.useState(getValue)

  React.useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach((mql) => mql.addListener(handler))
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler))
  }, [mediaQueryLists, getValue])

  return value
}
