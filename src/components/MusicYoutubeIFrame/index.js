import { useEffect, useRef, useState } from 'react'

export function MusicYoutubeIFrame ({ src, title }) {
  const [iframeHeight, setIframeHeight] = useState(444)
  
  const iframeRef = useRef()

  useEffect(() => {
    if (iframeRef.current) {
      const iframeWidth = iframeRef.current.offsetWidth
      
      setIframeHeight(iframeWidth * 0.56273)
    }
  }, [])

  return (
    <iframe 
      width="100%" 
      height={ iframeHeight } 
      src={ src } 
      title={ title }
      ref={ iframeRef } 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
      </iframe>
  )
}
