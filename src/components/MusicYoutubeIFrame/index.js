import { useEffect, useRef, useState } from 'react'

export function MusicYoutubeIFrame ({ src, title }) {
  const [iframeHeight, setIframeHeight] = useState(444)
  
  const iframeRef = useRef()

  useEffect(() => {
    
    function windowResizeHandler () {
      setIframeHeight(iframeRef.current.offsetWidth * 0.56273)
    }
    
    if (iframeRef.current) {
      windowResizeHandler()
    }

    window.addEventListener('resize', windowResizeHandler, true)

    return () => {
      window.removeEventListener('resize', windowResizeHandler, true)
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
