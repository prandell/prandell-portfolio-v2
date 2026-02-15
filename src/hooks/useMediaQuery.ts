import { useEffect, useState } from 'react'

const getMatch = (query: string) => {
  if (typeof window === 'undefined') {
    return false
  }
  return window.matchMedia(query).matches
}

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => getMatch(query))

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    const onChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    setMatches(mediaQuery.matches)
    mediaQuery.addEventListener('change', onChange)

    return () => {
      mediaQuery.removeEventListener('change', onChange)
    }
  }, [query])

  return matches
}
