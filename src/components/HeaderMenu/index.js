import { Fragment, useState, useEffect, useRef } from 'react'
import * as Icon from 'react-icons/sl'

import { HeaderSearchBoxResultPreview } from './HeaderSearchBoxResultPreview'
import { FixedHeaderMenuElement } from './FixedHeaderMenuElement'
import { HeaderMenuItemWrapper } from './HeaderMenuItemWrapper'
import { HeaderMenuButton } from './HeaderMenuButton'

import { elementOffsetY } from '@utils/helper'

import {
  HeaderMenuContainer,
  HeaderLogoContainer,
  HeaderSearchBoxContainer,
  HeaderSearchBoxWrapperElement,
  HeaderMenuWrapper,
  IconContainer,
  HeaderSearchBox,
  HeaderSearchBoxInput
} from './styles'
import Link from 'next/link'

// import DeezerLogo from './deezer_logo.svg'

export function HeaderMenu ({ children }) {
  const [query, setQuery] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [fixed, setFixed] = useState(false)
  const [hideMenuItems, setHideMenuItems] = useState(false)
  const containerRef = useRef()
  const headerSearchBoxContainerRef = useRef()
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

  function searchBoxInputChangeHandler ({ target }) {
    setQuery(target.value)
  }

  function searchBoxInputBlurHandler () {
    setTimeout(() => setShowPreview(false), 200)
    
    headerSearchBoxContainerRef.current?.classList.remove('x-focus')
  }

  function searchBoxInputFocusHandler () {
    setShowPreview(true)
    
    if (window.innerWidth <= 700) {
      headerSearchBoxContainerRef.current?.classList.add('x-focus')
    }
  }

  function validQuery (query) {
    return Boolean(query && /\S/.test(query))
  }

  function headerMenuChildrenMap (child) {
    if (child.type == HeaderMenuItemWrapper) {
      return { 
        ...child, 
        props: { 
          ...child.props, 
          wrap: !hideMenuItems 
        } 
      }
    }

    return child
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
          <Link href="/">
            <a>
              <span className='appName'>Sounya</span>
            </a>
          </Link>
        </HeaderLogoContainer>
        <HeaderSearchBoxWrapperElement>
          <HeaderSearchBoxContainer ref={headerSearchBoxContainerRef}>
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
        </HeaderSearchBoxWrapperElement>
        <HeaderMenuWrapperElement>
          {children.map (headerMenuChildrenMap)}
        </HeaderMenuWrapperElement>
      </HeaderMenuContainer>
    </HeaderMenuContainerWrapper>
  )
}
