import { Fragment, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import * as Icon from 'react-icons/sl'

import { HeaderSearchBoxResultPreview } from './HeaderSearchBoxResultPreview'

import { elementOffsetY } from '@utils/helper'

import {
  HeaderMenuContainer,
  HeaderLogoContainer,
  HeaderSearchBoxContainer,
  HeaderMenuWrapper,
  IconContainer,
  HeaderSearchBox,
  HeaderSearchBoxInput,
  HeaderMenuItemLink,
  FixedHeaderMenu
} from './styles'

function FixedHeaderMenuElement ({ children, containerRef }) {
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

// import DeezerLogo from './deezer_logo.svg'

export function HeaderMenu ({ children }) {
  const [query, setQuery] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [fixed, setFixed] = useState(false)
  const containerRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    const pageScrollHandler = (event) => {
      const containerY = containerRef.current.offsetHeight + elementOffsetY(containerRef.current)

      if (window.scrollY >= containerY) {
        !fixed && setFixed(true)
      } else {
        fixed && setFixed(false)
      }
    }

    if (showPreview) {
      inputRef.current.focus()
    }

    window.addEventListener('scroll', pageScrollHandler, true)

    return () => {
      window.removeEventListener('scroll', pageScrollHandler, true)
    }
  })

  function searchBoxInputChangeHandler ({ target, ...event }) {
    setQuery(target.value)
  }

  function searchBoxInputBlurHandler () {
    setTimeout(() => setShowPreview(false), 200)
  }

  function searchBoxInputFocusHandler () {
    setShowPreview(true)
  }

  function validQuery (query) {
    return Boolean(query && /\S/.test(query))
  }

  const HeaderMenuContainerWrapper = fixed ? FixedHeaderMenuElement : Fragment

  const containerWrapperProps = {}

  if (!!fixed) {
    containerWrapperProps.containerRef = containerRef
  }

  return (
    <HeaderMenuContainerWrapper {...containerWrapperProps}>
      <HeaderMenuContainer ref={containerRef}>
        <HeaderLogoContainer>
          <span>DeezerAPI</span>
        </HeaderLogoContainer>
        <HeaderSearchBoxContainer>
          <IconContainer>
            <Icon.SlMagnifier />
          </IconContainer>
          <HeaderSearchBox>
            <HeaderSearchBoxInput
              onChange={searchBoxInputChangeHandler}
              onBlur={searchBoxInputBlurHandler}
              onFocus={searchBoxInputFocusHandler}
              defaultValue={query}
              ref={inputRef}
              />
          </HeaderSearchBox>
          
          {validQuery(query) && showPreview && (
            <HeaderSearchBoxResultPreview query={query} />
          )}

        </HeaderSearchBoxContainer>
        <HeaderMenuWrapper>
          {children}
        </HeaderMenuWrapper>
      </HeaderMenuContainer>
    </HeaderMenuContainerWrapper>
  )
}

export function HeaderMenuItem ({ label, icon, href }) {
  const HeaderMenuIcon = Icon[icon] || Fragment

  return (
    <HeaderMenuItemLink>
      <Link href={href || '/'}>
        <a>
          <HeaderMenuIcon />

          <span>
            { label }
          </span>
        </a>
      </Link>
    </HeaderMenuItemLink>
  )
}
