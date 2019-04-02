# useEventListener

用于给特定元素加上监听器

## Usage 用法

```jsx
import { useEventListener } from 'uni-hook'
```

## Demo 代码

```jsx
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
```

## Api

> useEventListener(eventName, callback, element = window, config?)

*`element`默认是`window`，如果需要给`某个元素`加上监听器，需要主动触发一次`rerender`来加上`监听器`*