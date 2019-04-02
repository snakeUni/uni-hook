import * as React from 'react'
import { useEventListener } from '../../src';

export default function EventListenerDemo() {
  const [focus, setFocus] = React.useState(false)
  const ref = React.useRef<any>()
  const mouseEnter = () => {
    setFocus(true)
  }
  const mouseLeave = () => {
    setFocus(false)
  }

  useEventListener('mouseenter', mouseEnter, ref.current)
  useEventListener('mouseleave', mouseLeave, ref.current)

  React.useEffect(() => {
    console.log('mount:', ref.current)
    setFocus(true)
  }, [])

  return (
    <div ref={ref}>
      {focus ? 'focus' : 'no focus'}
    </div>
  )
}