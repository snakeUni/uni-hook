import * as React from 'react'
import { noop } from '../utils'

interface IndexedDBProps {
  // 是否临时存储 默认为false
  temporary: boolean
  // name 数据库的名字
  name: string
  // version 版本默认为1
  version: number
  // onSuccess 成功的回调
  onSuccess: () => void
  // 失败的回调
  onError: () => void
}

const { useState, useRef } = React

function useIndexedDB({ name, onSuccess = noop, onError = noop, version = 1 }: IndexedDBProps) {

  const ref = useRef({})
  const request:any = window.indexedDB.open(name, version)
  request.onsuccess((event: any) => {
    ref.current = event.target.result
  })

  request.onerror(() => {
    console.info("your app don't allow use indexedDB")
  })

}

export default useIndexedDB