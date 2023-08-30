import { Fragment, useState, useEffect, useRef } from 'react'

// import { elementOffsetY } from '@utils/helper'

import { 
  UserProfileActionDropDownElement,
  UserProfileActionDropDownBackButtonWrapper,
  UserProfileActionDropDownBackButton 
} from './styles'
import { userProfileActionDropDownChildrenFilter } from './userProfileActionDropDownChildrenFilter'
// import { userProfileActionDropDownChildrenMap } from './userProfileActionDropDownChildrenMap'

export function UserProfileActionDropDown ({ children, ...props }) {
  const [screenStack, setScreenStack] = useState([children])
  const elementRef = useRef()

  useEffect(() => {
    if (elementRef.current) {
      // const userProfileActionElementY = elementOffsetY(elementRef.current)
      
      // console.log('Y => ', props.mouseCords.y, '\n', 'H => ', elementRef.current.offsetHeight, '\n Mouse Cords => ', props.mouseCords)

      if (props.mouseCords.y + elementRef.current.offsetHeight >= (window.innerHeight)) {
        elementRef.current.style.cssText += `
          top: initial;
          bottom: 100%;
        `
      }

      if (props.mouseCords.x + elementRef.current.offsetWidth >= (window.innerWidth)) {
        elementRef.current.style.cssText += `
          left: initial;
          right: 0%;
        `
      }      
    }

    function windowClickHandler (event) {
      if (!elementRef.current) {
        return
      }

      // console.log('X => ', event.clientX, '\nY => ', event.clientY)
      const elementRects = elementRef.current.getClientRects()
      const elementRectData = elementRects.item(0)
      const [elementOffsetX, elementOffsetY] = [
        elementRectData.x,
        elementRectData.y
      ]

      const clickOutOfContainerElementArea = Boolean(
           event.clientX < elementOffsetX 
        || event.clientX > elementOffsetX + elementRef.current.offsetWidth
        || event.clientY < elementOffsetY 
        || event.clientY > elementOffsetY + elementRef.current.offsetHeight
      )

      if (clickOutOfContainerElementArea) {
        if (props.onBlur && typeof props.onBlur === 'function') {
          const blurEventProps = { 
            hide: true 
          }
          
          props.onBlur.apply({}, [blurEventProps])
        }
      }
    }

    window.addEventListener('click', windowClickHandler, true)
    
    return () => {
      window.removeEventListener('click', windowClickHandler, true)
    }
  }, [screenStack, props.show, props.mouseCords, props.onBlur])

  if (!(children instanceof Array)) {
    children = [ children ]
  }

  const userProfileActionDropDownElement = {
    ...props,
    ref: elementRef
  }

  function backButtonClickHandler () {
    setScreenStack(screenStack.slice(0, screenStack.length - 1))
  }

  const userProfileActionDropDownChildrenMap = (child) => {
    if (typeof 'str' === typeof child.type) {
      return child
    }

    let childChildrenList = child.props.children

    if (childChildrenList) {
      if (!(childChildrenList instanceof Array)) {
        childChildrenList = [ childChildrenList ]
      }

      childChildrenList = childChildrenList.map(userProfileActionDropDownChildrenMap)
    }
  
    return {
      ...child,
  
      props: {
        ...child.props,
        children: childChildrenList,
        onClick: function userProfileActionDropDownChildClickHandler () {
          const { children: childChildren } = child.props

          if (childChildren || (childChildren instanceof Array && childChildren.length >= 1)) {
            setScreenStack([...screenStack, childChildren instanceof Array ? childChildren : [ childChildren ]])
          }
        }
      }
    }
  }

  return (
    <Fragment>
      {children && screenStack.length >= 1 && props.show && (
        <UserProfileActionDropDownElement {...userProfileActionDropDownElement}>
          {screenStack.length >= 2 && (
            <UserProfileActionDropDownBackButtonWrapper>
              <UserProfileActionDropDownBackButton onClick={backButtonClickHandler}>
                <div></div>
                <span>Voltar</span>
              </UserProfileActionDropDownBackButton>
            </UserProfileActionDropDownBackButtonWrapper>
          )}
          {
            screenStack[-1 + screenStack.length]
              .filter(userProfileActionDropDownChildrenFilter)
              .map(userProfileActionDropDownChildrenMap)
          }
        </UserProfileActionDropDownElement>
      )}
    </Fragment>
  )
}
