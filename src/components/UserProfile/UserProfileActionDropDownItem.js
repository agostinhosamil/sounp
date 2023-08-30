import Link from 'next/link'

import { UserProfileActionDropDownIcon } from './UserProfileActionDropDownIcon'

import {
  UserProfileActionDropDownItemWrapper,
  UserProfileActionDropDownItemLabelWrapper,
  UserProfileActionDropDownItemLabel
} from './styles'

export function UserProfileActionDropDownItem ({ icon, label, href, ...props }) {

  function validLabel (labelText) {
    return typeof labelText === typeof 'str' && /\S/.test(labelText)
  }

  const LinkContainerElement = !props.children ? Link : function ({ children }) {
    if (!(children instanceof Array)) {
      children = [children]
    }

    children = children.map(child => {
      if (child.type !== 'a') {
        return child
      }

      return {
        ...child,
        props: {
          ...child.props,
          href: '#',
          onClick: (event) => {
            event.preventDefault()

            if (props.onClick && typeof props.onClick === 'function') {              
              props.onClick.apply(event.target, [event])
            }
          }
        }
      }
    })

    return children
  }

  return (
    <UserProfileActionDropDownItemWrapper>
      <LinkContainerElement href={ href || '' }>
        <a>
          <UserProfileActionDropDownIcon icon={ icon } />
          
          {validLabel(label) && (
            <UserProfileActionDropDownItemLabelWrapper>
              <UserProfileActionDropDownItemLabel>
                { label }
              </UserProfileActionDropDownItemLabel>
            </UserProfileActionDropDownItemLabelWrapper>
          )}

          {props.children && (
            <span>&gt;</span>
          )}
        </a>
      </LinkContainerElement>
    </UserProfileActionDropDownItemWrapper>
  )
}
