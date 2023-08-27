export const userProfileActionDropDownChildrenMap = (child) => {
  if (typeof 'str' === typeof child.type) {
    return child
  }

  return {
    ...child,

    props: {
      ...child.props,
      onClick: () => {

      }
    }
  }
}
