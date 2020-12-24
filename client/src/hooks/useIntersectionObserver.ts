import React from 'react'

type ObserverArgs = {
  target: any
  onIntersect: () => void
  enabled: boolean | undefined
}

export const useIntersectionObserver = ({
  target,
  onIntersect,
  enabled = true,
}: ObserverArgs) => {
  React.useEffect(() => {
    if (!enabled) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          console.log(entry)
          entry.isIntersecting && onIntersect()
        }),
      {
        threshold: 0.8,
      }
    )

    const el = target && target.current

    if (!el) {
      return
    }

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [target.current, enabled])
}
