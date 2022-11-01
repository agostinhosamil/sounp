import { Fragment, useState } from 'react'
import Link from 'next/link'
import * as Icon from 'react-icons/sl'

import { HeaderSearchBoxResultPreview } from './HeaderSearchBoxResultPreview'

import {
  HeaderMenuContainer,
  HeaderLogoContainer,
  HeaderSearchBoxContainer,
  HeaderMenuWrapper,
  IconContainer,
  HeaderSearchBox,
  HeaderSearchBoxInput,
  HeaderMenuItemLink
} from './styles'

// import DeezerLogo from './deezer_logo.svg'

export function HeaderMenu ({ children }) {
  const [query, setQuery] = useState('')
  const [showPreview, setShowPreview] = useState(false)

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

  return (
    <HeaderMenuContainer>
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
