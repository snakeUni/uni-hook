import * as React from 'react'

const { useRef, useEffect } = React

export default function useEventListener(eventName: string, handler: () => any, element = window, config?: any) {
  const saveHandlerRef = useRef<any>()

  useEffect(() => {
    saveHandlerRef.current = handler
  }, [handler])

  useEffect(() => {
    // element 默认 `window`
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    
    const eventListener = (event: any) => saveHandlerRef.current(event);
    
    // config 用于配置属性
    element.addEventListener(eventName, eventListener, config);
    
    return () => {
      element.removeEventListener(eventName, eventListener, config);
    };
  }, [eventName, element])
}