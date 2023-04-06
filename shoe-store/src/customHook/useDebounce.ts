import React, { useEffect, useState } from 'react'

export const useDebounce = (value: string, ms: number): string => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const time = setTimeout(() => {
      setDebounceValue(value)
    }, ms)
    return () => { clearTimeout(time) }
  }, [value])

  return debounceValue
}
