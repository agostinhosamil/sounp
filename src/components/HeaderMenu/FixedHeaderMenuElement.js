import { Fragment, useRef, useEffect } from 'react'

import { FixedHeaderMenu } from './styles'

export function FixedHeaderMenuElement ({ children, containerRef }) {
  const divRef = useRef()

  useEffect(() => {
    divRef.current.style.height = `${containerRef.current.offsetHeight}px`
  })

  return (
    <Fragment>
      <div ref={divRef} style={{ width: '100%' }} />
      <FixedHeaderMenu>
        {children}
      </FixedHeaderMenu>
    </Fragment>
  )
}
