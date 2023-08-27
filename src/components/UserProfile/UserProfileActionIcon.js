import { Fragment } from 'react'
import * as Icon from 'react-icons/sl'

import { UserProfileActionIconWrapper } from './styles'

export function UserProfileActionIcon ({ icon }) {
  const IconElement = Icon[icon]
  
  if (!IconElement) {
    return <Fragment />
  }

  return (
    <UserProfileActionIconWrapper>
      <IconElement />
    </UserProfileActionIconWrapper>
  )
}
