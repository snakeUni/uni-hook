import * as React from 'react'

type Status = 'loading' | 'loaded' | 'failed'

interface State {
  image: any
  status: Status
}

const initialState: State = {
  image: undefined,
  status: 'loading'
}

export default function useImage(url: string, crossOrigin?: string) {
  const [image, setImage] = React.useState(initialState)

  React.useEffect(() => {
    if (!url) return

    const img = React.createElement('img', {
      src: url,
      crossOrigin: crossOrigin,
      onLoad: onLoad,
      onError: onFail
    })

    function onLoad() {
      setImage({ image: img, status: 'loaded'})
    }


    function onFail() {
      setImage({ image: img, status: 'failed' })
    }

    setImage({
      image: img,
      status: 'loading'
    })

    return () => {}

  }, [url, crossOrigin])

  return [image.image, image.status]
}