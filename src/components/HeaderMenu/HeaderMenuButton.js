import { Fragment, useState } from 'react'
import * as Icon from 'react-icons/sl'

import { 
  HeaderMenuButtonContainer, 
  MobileHeaderMenuWrapper, 
  MobileHeaderMenuBackground 
} from './styles'

export function HeaderMenuButton ({ children }) {
  const [showList, setShowList] = useState(false)

  function  buttonClickHandler (event) {
    setShowList(!showList)
  }

  function menuWrapperClickHandler (event) {
    if (['SPAN', 'A'].indexOf(event.target.nodeName) >= 0) {
      setTimeout(() => setShowList(false), 200)
    }
  }

  return (
    <Fragment>
      <HeaderMenuButtonContainer onClick={buttonClickHandler}>
        <Icon.SlMenu />
      </HeaderMenuButtonContainer>
      {showList && (
        <Fragment>
          <MobileHeaderMenuWrapper onClick={menuWrapperClickHandler}>
            { children }
          </MobileHeaderMenuWrapper>
          <MobileHeaderMenuBackground onClick={buttonClickHandler} />
        </Fragment>
      )}
    </Fragment>
  )
}
