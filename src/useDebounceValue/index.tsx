import * as React from 'react'

const { useState, useEffect } = React

function useDebounceValue(value: any, delay: number) {
  const [debounce, setDebounce] = useState(value)

  // 只在value或delay改变的时候再次触发
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounce(value)
    }, delay)
    return () => {
      clearTimeout(timeOut)
    }
  }, [value, delay])
  return debounce
}

export default useDebounceValue