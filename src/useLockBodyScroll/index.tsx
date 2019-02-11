import * as React from 'react'

const { useLayoutEffect } = React

function useLockBodyScroll(lock = true) {
  useLayoutEffect(() => {
    document.body.style.overflow = lock ? 'hidden' : 'visible'
    return () => document.body.style.overflow = lock ? 'visible' : 'hidden'
  }, [lock])
}

export default useLockBodyScroll