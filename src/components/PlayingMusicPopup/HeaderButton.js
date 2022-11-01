import { Fragment } from 'react'
import * as Icon from 'react-icons/sl'

import { HeaderButtonContainer } from './styles'

export const HeaderButton = ({ icon, ...props }) => {
  const HeaderButtonIcon = Icon[String(icon)] || Fragment

  const buttonClickHandler = (event) => {
    event.preventDefault()

    if (typeof props.onClick === 'function') {
      props.onClick.bind(event.target, [event]).call()
    }
  }

  return (
    <HeaderButtonContainer 
      href="#" 
      onClick={buttonClickHandler}>
      <HeaderButtonIcon />
    </HeaderButtonContainer>
  )
}
