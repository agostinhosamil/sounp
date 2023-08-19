import { Fragment, useState } from 'react'
import * as Icon from 'react-icons/sl'

import { AccountHeader } from './AccountHeader'

import {
  MobileHeaderMenuBackground, 
  MobileHeaderMenuWrapper, 
  MobileHeaderMenuFooter,
  MobileHeaderMenuFooterLine,
  MobileHeaderMenuHeader,
  MobileHeaderMenuBody,
  HeaderMenuItemLink,
} from './styles'
import Link from 'next/link'

export function HeaderMenuItemWrapper ({ label, icon, ...props }) {
  const [showList, setShowList] = useState(false)

  const HeaderMenuIcon = Icon[icon] || Fragment

  if (!props.wrap) {
    return (
      <Fragment>
        { props.children }
      </Fragment>
    )
  }

  function linkClickHandler (event) {
    event.preventDefault()

    setShowList(!showList)
  }

  function mobileHeaderMenuWrapperRef (mobileHeaderMenuWrapper) {
    if (mobileHeaderMenuWrapper) {
      const mobileHeaderMenuWrapperLinkElements = mobileHeaderMenuWrapper.querySelectorAll('a')

      mobileHeaderMenuWrapperLinkElements
        .forEach(mobileHeaderMenuWrapperLinkElement => {
          mobileHeaderMenuWrapperLinkElement.addEventListener('click', () => {
            setTimeout(() => setShowList(false), 200)
          })
        })
    }
  }

  // remove any whitespace from the label to use it as an id
  const labelRefId = label.toLowerCase().split(/\s+/).join('')

  return (
    <Fragment>
      <HeaderMenuItemLink>
        <a href={`#${labelRefId}`} onClick={linkClickHandler}>
          <HeaderMenuIcon />
          <span>
            { label }
          </span>
        </a>
      </HeaderMenuItemLink>
      {showList && (
        <Fragment>
          <MobileHeaderMenuWrapper ref={mobileHeaderMenuWrapperRef}>
            <MobileHeaderMenuHeader>
              <AccountHeader />
            </MobileHeaderMenuHeader>
            <MobileHeaderMenuBody>
              { props.children }
            </MobileHeaderMenuBody>
            <MobileHeaderMenuFooter>
              <MobileHeaderMenuFooterLine>
                <Link href="#">
                  <a>Acerca de</a>
                </Link>
                <Link href="#">
                  <a>Imprensa</a>
                </Link>
                <Link href="#">
                  <a>Termos de serviço</a>
                </Link>
                <Link href="#">
                  <a>Politica de privacidade</a>
                </Link>
              </MobileHeaderMenuFooterLine>
              <MobileHeaderMenuFooterLine>
                <Link href="#">
                  <a>Acerca de</a>
                </Link>
                <Link href="#">
                  <a>Imprensa 1</a>
                </Link>
                <Link href="#">
                  <a>Termos de serviço</a>
                </Link>
                <Link href="#">
                  <a>Politica de privacidade</a>
                </Link>
              </MobileHeaderMenuFooterLine>
              <MobileHeaderMenuFooterLine>
                <span>@2023 - Sounya</span>
              </MobileHeaderMenuFooterLine>
            </MobileHeaderMenuFooter>
          </MobileHeaderMenuWrapper>
          <MobileHeaderMenuBackground onClick={linkClickHandler} />
        </Fragment>
      )}
    </Fragment>
  )
}
