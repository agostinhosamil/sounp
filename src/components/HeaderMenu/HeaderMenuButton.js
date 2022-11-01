import { Fragment } from 'react'
import * as Icon from 'react-icons/sl'

import { HeaderMenuButtonContainer } from './styles'

export function HeaderMenuButton ({ children }) {
  return (
    <Fragment>
      <HeaderMenuButtonContainer>
        <Icon.SlMenu />
      </HeaderMenuButtonContainer>
    </Fragment>
  )
}
