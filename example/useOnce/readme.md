# useOnce

用于只调用一次的情况

## Usage  用法

引入hook

```jsx
import { useOnce } from 'uni-hook'
```

## Demo 代码

```jsx
export default function OnceDemo() {
  const [state, setState] = React.useState(0)
  const value = useOnce(() => state)
  return (
    <div>
      <div>useOnce的值不随着state的变化而变化: {value}</div>
      <div>state值: {state}</div>
      <Button onClick={() => setState(state + 1)}>点击增加state</Button>
    </div>
  )
}
```

## Api

> useOnce(callback: fn)