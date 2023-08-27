import { Fragment } from 'react'
import * as Icon from 'react-icons/sl'

import { UserProfileActionDropDownIconWrapper } from './styles'

export function UserProfileActionDropDownIcon ({ icon }) {
  const IconElement = Icon[icon]
  
  if (!IconElement) {
    return <Fragment />
  }

  return (
    <UserProfileActionDropDownIconWrapper>
      <IconElement />
    </UserProfileActionDropDownIconWrapper>
  )
}
