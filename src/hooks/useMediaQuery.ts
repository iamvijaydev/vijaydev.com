import { useState } from 'react'
import { useIsomorphicEffect } from './useIsomorphicEffect';

type UseMediaQueryOptions<InitializeWithValue extends boolean | undefined> = {
  defaultValue?: boolean
  initializeWithValue: InitializeWithValue
}

const IS_SERVER = typeof window === 'undefined'

export function useMediaQuery(
  query: string,
  options?: Partial<UseMediaQueryOptions<boolean>>,
): boolean {
  const defaultValue = options?.defaultValue ?? false;
  let initializeWithValue = options?.initializeWithValue ?? undefined;

  if (IS_SERVER) {
    initializeWithValue = false
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return defaultValue
  }

  function handleChange() {
    setMatches(getMatches(query))
  }

  useIsomorphicEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}