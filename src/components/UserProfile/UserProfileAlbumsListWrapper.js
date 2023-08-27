import { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'

import { UserProfileAlbumsListWrapperContainer } from './styles'

export function UserProfileAlbumsListWrapper ({ children }) {
  const [slidesToShow, setSlidesToShow] = useState(2)
  const containerRef = useRef()

  function windowResizeHandler () {
    if (containerRef.current) {
      const albumsWrapperElement = containerRef.current.parentNode.parentNode
      const albumsWrapperElementWidth = albumsWrapperElement.offsetWidth - (parseFloat(getComputedStyle(albumsWrapperElement).paddingLeft) * 2)

      setSlidesToShow(Math.round(albumsWrapperElementWidth / 230))

      containerRef.current.style.maxWidth = `${albumsWrapperElementWidth}px`
    }
  }

  useEffect(() => {
    windowResizeHandler()

    window.addEventListener('resize', windowResizeHandler, true)
    
    return () => {
      window.removeEventListener('resize', windowResizeHandler, true)
    }
  }, [])

  return (
    <UserProfileAlbumsListWrapperContainer ref={containerRef}>
      {/* <Slider 
        dots={ false }
        infinite={ false }
        centerPadding="40px"
        speed={ 500 }
        slidesToShow={ slidesToShow }
        slidesToScroll={ Math.round(slidesToShow / 2) }> */}
        {children}
      {/* </Slider> */}
    </UserProfileAlbumsListWrapperContainer>
  )
}
