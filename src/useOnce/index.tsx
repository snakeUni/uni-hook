import * as React from 'react'

const noop = () => {}

export default function useOnce(callback = noop) {
  const ref = React.useRef<any>(null)

  if (ref.current === null) {
    ref.current = { value: callback() }
  }

  return ref.current.value
}