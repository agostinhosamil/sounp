import { useState, useRef } from 'react'

// import { elementOffsetX, elementOffsetY } from '@utils/helper'

import { UserProfileActionDropDown } from './UserProfileActionDropDown'
import { UserProfileActionIcon } from './UserProfileActionIcon'

import {
  UserProfileActionContainer,
  UserProfileActionElement,
  UserProfileActionLabel
} from './styles'

export function UserProfileAction ({ label, icon, ...props }) {
  const [showDropDown, setShowDropDown] = useState(false)
  const [mouseCords, setMouseCords] = useState({
    x: null,
    y: null
  })
  const userProfileActionElementRef = useRef()
  // const userProfileActionDropDownRef = useRef()

  const userProfileActionElementProps = {
    colored: (props.colored && true) || false,
    ref: userProfileActionElementRef,

    onClick: function clickHandler (event) {
      if (typeof props.onClick === 'function') {
        props.onClick.apply(event.target, [event])
      }

      if (props.children) {
        if (!showDropDown) {
          setShowDropDown(true)
        }

        setMouseCords({
          x: event.clientX,
          y: event.clientY
        })

        // if (userProfileActionElementRef.current) {
        //   userProfileActionElementRef.current.tabIndex = 1
        // }      
      }
    },

    onBlur: function blurHandler () {
      // setTimeout(() => setShowDropDown(false), 200)

      // console.log('Ref => ', userProfileActionDropDownRef)
    }
  }
  
  function validLabel (labelText) {
    return typeof labelText === typeof 'str' && /\S/.test(labelText)
  }

  function actionDropDownBlurHandler (event) {
    if (event.hide && showDropDown) {
      setTimeout(() => setShowDropDown(false), 50)
    }
  }

  // function actionDropDownMouseEnterHandler () {
  //   // console.log('Mouse ENTER -> ')
  // }

  // function actionDropDownMouseOutHandler () {
  //   // console.log('Mouse OUT -> ')
  // }

  return (
    <UserProfileActionContainer>
      <UserProfileActionElement {...userProfileActionElementProps}>
        <UserProfileActionIcon icon={ icon } />
        {validLabel(label) && (
          <UserProfileActionLabel>
            { label }
          </UserProfileActionLabel>
        )}
      </UserProfileActionElement>
      <UserProfileActionDropDown 
        show={showDropDown}
        mouseCords={mouseCords}
        onBlur={actionDropDownBlurHandler}>
        { props.children }
      </UserProfileActionDropDown>
    </UserProfileActionContainer>
  )
}
