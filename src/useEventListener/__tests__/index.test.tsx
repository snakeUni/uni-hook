import * as React from 'react'
import { renderHook, cleanup } from 'react-hooks-testing-library'
import useEventListener from '../index'

function EventListenerDemo() {
  const [focus, setFocus] = React.useState(false)
  const ref = React.useRef<any>()
  const mouseEnter = () => {
    setFocus(true)
  }
  const mouseLeave = () => {
    setFocus(false)
  }
  useEventListener('mouseenter', mouseEnter, ref.current)
  useEventListener('mouseleave',mouseLeave, ref.current)
  return (
    <div ref={ref} id="11">
      {focus ? 'focus' : 'no focus'}
    </div>
  )
}

describe('useEventListener test', () => {
  afterEach(cleanup)

  it('should use eventListener', () => {

  })
})