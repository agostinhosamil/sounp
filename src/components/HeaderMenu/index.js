import { Fragment, useState, useEffect, useRef } from 'react'
import * as Icon from 'react-icons/sl'

import { HeaderSearchBoxResultPreview } from './HeaderSearchBoxResultPreview'
import { FixedHeaderMenuElement } from './FixedHeaderMenuElement'
import { HeaderMenuButton } from './HeaderMenuButton'

import { elementOffsetY } from '@utils/helper'

import {
  HeaderMenuContainer,
  HeaderLogoContainer,
  HeaderSearchBoxContainer,
  HeaderMenuWrapper,
  IconContainer,
  HeaderSearchBox,
  HeaderSearchBoxInput
} from './styles'

// import DeezerLogo from './deezer_logo.svg'

export function HeaderMenu ({ children }) {
  const [query, setQuery] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [fixed, setFixed] = useState(false)
  const [hideMenuItems, setHideMenuItems] = useState(false)
  const containerRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    const pageScrollHandler = () => {
      const containerY = containerRef.current.offsetHeight + elementOffsetY(containerRef.current)

      if (window.scrollY >= containerY) {
        !fixed && setFixed(true)
      } else {
        fixed && setFixed(false)
      }
    }

    const pageResizeHandler = () => {
      if (window.innerWidth > 800) {
        hideMenuItems && setHideMenuItems(false)
      } else {
        !hideMenuItems && setHideMenuItems(true)
      }
    }

    pageResizeHandler()

    if (showPreview) {
      inputRef.current?.focus()
    }

    window.addEventListener('scroll', pageScrollHandler, true)
    window.addEventListener('resize', pageResizeHandler, true)

    return () => {
      window.removeEventListener('scroll', pageScrollHandler, true)
      window.removeEventListener('resize', pageResizeHandler, true)
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
  const HeaderMenuWrapperElement = hideMenuItems ? HeaderMenuButton : HeaderMenuWrapper

  const containerWrapperProps = {}

  if (!!fixed) {
    containerWrapperProps.containerRef = containerRef
  }

  return (
    <HeaderMenuContainerWrapper {...containerWrapperProps}>
      <HeaderMenuContainer ref={containerRef}>
        <HeaderLogoContainer>
          <span>Sounya</span>
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
        <HeaderMenuWrapperElement>
          {children}
        </HeaderMenuWrapperElement>
      </HeaderMenuContainer>
    </HeaderMenuContainerWrapper>
  )
}
