import { UserProfileActionDropDownItem } from './UserProfileActionDropDownItem'

export const userProfileActionDropDownChildrenFilter = child => {

  const childType = child.type

  if (['hr'].indexOf(childType) >= 0) 
    return true

  if ('function' === typeof childType && childType.name) {
    const validChildrenComponents = [
      UserProfileActionDropDownItem
    ]

    return (validChildrenComponents.map(component => component.name).indexOf(childType.name) >= 0)
  }
}
