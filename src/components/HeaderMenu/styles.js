import styled from 'styled-components'

export const HeaderMenuContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 12px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 5;
`

export const HeaderLogoContainer = styled.div`
  width: 144px;
  padding-right: 18px;

  span {
    font: 900 32px "Impact";
    color: #ff6366;
    cursor: none;
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`

export const HeaderSearchBoxContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  -webkit-border-radius: 4px;
`

export const IconContainer = styled.div`
  width: 16px;
  position: absolute;
  top: 50%;
  margin-top: -8px;
  left: 10px;
`

export const HeaderSearchBoxInput = styled.input.attrs({
  spellCheck: false,
  autoCapitalize: 'off',
  autoCorrect: 'off',
  type: 'text',
  minLength: 1
})`
  width: 100%;
  outline: 0px;
  border: 0px;
  font-size: 25px;
  background-color: transparent;
  font-weight: 100;
  font-family: "Roboto Thin", "Trebuchet MS", "Arial Narrow", "Arial", sans-serif;
`

export const HeaderSearchBox = styled.div`
  width: 100%;
  padding-left: 35px;
`

export const HeaderMenuWrapper = styled.ul`
  list-style: none;
  padding-left: 7px;
  white-space: nowrap;
`

export const HeaderMenuItemLink = styled.li`
  white-space: nowrap;
  text-transform: uppercase;
  display: inline-block;
  padding: 0px 10px;

  a {
    color: inherit;

    span {
      display: inline-block;
      padding-left: 5px;
    }

    &:hover {
      color: #d72626;
    }
  }
`

export const HeaderSearchBoxResultPreviewContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-color: inherit;
  border-width: 1px;
  border-style: solid;
  position: absolute;
  top: 100%;
  box-shadow: rgba(0, 0, 0, .25) 1px 15px 15px 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  -webkit-border-bottom-left-radius: 4px;
  -webkit-border-bottom-right-radius: 4px;
  overflow-y: auto;
`

export const HeaderSearchBoxResultPreviewList = styled.ul`
  background-color: #ffffff;
  list-style: none;
  padding: 0px;
  margin: 0px;
`

export const HeaderSearchBoxResultContainer = styled.li`
  width: 100%;
  border-bottom: 1px solid #ededed;

  a {
    display: flex;
    align-items: center;
    padding: 8px 12px;

    &:hover {
      background-color: #f9e5e6;
    }
  }
`

export const HeaderSearchBoxResultThumb = styled.div`
  width: 32px;
  height: 28px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: #dadeda;
  margin-right: 8px;
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-image: url(${props => props.src});
`

export const HeaderSearchBoxResultTitle = styled.strong`
  display: block;
  width: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const HeaderSearchBoxResultSubTitle = styled.i`
  font-size: 11px;
  white-space: nowrap;
  color: #707070;
  text-transform: uppercase;
`
