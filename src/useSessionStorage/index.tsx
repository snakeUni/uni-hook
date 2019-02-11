import * as React from 'react'

const { useState } = React

function useSessionStorage(key: string, initialValue?: any) {
  const [value, setValue] = useState(() => {
    try {
      const cacheValue = window.sessionStorage.getItem(key)
      return cacheValue ? JSON.parse(cacheValue) : initialValue
    } catch(error) {
      return initialValue
    }
  })

  const setItem = (value: any) => {
    setValue(value)
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }

  return [value, setItem]
}

export default useSessionStorage