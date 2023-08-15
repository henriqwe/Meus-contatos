import { useRef } from 'react'

export function useDebounce(fn: (...args: any) => void, delay: number) {
  const timeoutRef = useRef<any>(null)

  function debounceFn(...args: any) {
    window.clearTimeout(timeoutRef?.current)
    timeoutRef.current = window.setTimeout(() => fn(...args), delay)
  }

  return debounceFn
}
