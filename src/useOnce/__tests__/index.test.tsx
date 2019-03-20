import { renderHook, cleanup } from 'react-hooks-testing-library'
import useOnce from '../index'

describe('use once test', () => {
  afterEach(cleanup)

  it('should use once', () => {
    let a = 1
    const fn = () => a++
    const { result, rerender } = renderHook(() => useOnce(fn))
    expect(result.current).toBe(1)
    rerender()
    expect(result.current).toBe(1)
  })
})