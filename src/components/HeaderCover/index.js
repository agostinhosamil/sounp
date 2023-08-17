import { Fragment, useEffect, useState } from 'react'

import { Container, UndrawOffRoadReLemeContainer } from './styles'

import UndrawOffRoadReLeme from '../../images/undraw_off_road_re_leme.svg'

export function HeaderCover ({ children }) {
  const [show, setShow] = useState(true)
  
  const PAGE_MIN_WIDTH = 800

  useEffect(() => {
    function pageResizeHandler () {
      if (!(window.innerWidth > PAGE_MIN_WIDTH)) {
        show && setShow(false)
      } else {
        !show && setShow(!false)
      }
    }
    
    pageResizeHandler()

    window.addEventListener('resize', pageResizeHandler, true)

    return () => {
      window.removeEventListener('resize', pageResizeHandler, true)
    }
  }, [show])

  if (!show) {
    return <Fragment />
  }

  return (
    <Container>
      <div>
        {children}
      </div>
      <div>
        <UndrawOffRoadReLemeContainer>
          <UndrawOffRoadReLeme className="offRoadLeme" />
        </UndrawOffRoadReLemeContainer>
        <strong>Music query made easy :)</strong>
        <h1>
          Play the hottest and funny songs from deezer!
        </h1>
      </div>
    </Container>
  )
}
