import * as React from 'react'

const { useState } = React

function useToCase() {
  const [value, setValue] = useState('')

  const validateStr = (str: string) => {
    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  }

  const setCamelCase = (str: string) => {
    const s = validateStr(str)
    if (s) {
      const target = s.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('').slice(0, 1).toLowerCase() + s.slice(1)
      setValue(target)
    } else {
      console.error('param not a valid string')
    }
  }

  const setKebabCase = (str: string) => {
    const s = validateStr(str)
    if (s) {
      const target = s.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('').slice(0, 1).toLowerCase() + s.slice(1)
      setValue(target)
    } else {
      console.error('param not a valid string')
    }
  }

  const setSnakeCase = (str: string) => {
    const s = validateStr(str)
    if (s) {
      const target = s.map(x => x.toLowerCase())
      .join('_')
      setValue(target)
    } else {
      console.error('param not a valid string')
    }
  }

  const setTitleCase = (str: string) => {
    const s = validateStr(str)
    if (s) {
      const target = s.map(x => x.charAt(0).toUpperCase() + x.slice(1))
      .join(' ')
      setValue(target)
    } else {
      console.error('param not a valid string')
    }
  }

  return [value, {
    setCamelCase,
    setSnakeCase,
    setKebabCase,
    setTitleCase
  }]
}

export default useToCase