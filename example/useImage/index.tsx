import * as React from 'react'
import { useImage } from '../../src'

export default function ImageDemo() {
  const [image, status] = useImage('https://pbs.twimg.com/media/D2TmNQtWsAIC-b2.jpg')
  const [image1, status1] = useImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553319186242&di=80cfd4e84a2bec7d8c23457c1628fef3&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F39%2F50%2F00%2Fpic_lib%2Fwm%2FMac_OS_X_001011.jpg')
  console.log('image:', image)
  console.log('image1:', image1)
  return (
    <div>
      图片状态: {status}
      <div>
        {image}
      </div>
      图片状态: {status1}
      <div>
        {image1}
      </div>
    </div>
  )
}