import styled, { keyframes } from 'styled-components'

import { Image } from '@styles'

const bounceFromRight = keyframes`
  0% {
    transform: translateX(100%);
    z-index: 17;
  }

  100% {
    transform: translateX(0%);
  }
`

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

  .x-focus {
    position: fixed;
    width: 96%;
    top: 20px;
    left: 0px;
    right: 0px;
    margin: auto;
    z-index: 1000;
  }
`
// header menu color => #d5a088
export const FixedHeaderMenu = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 20;
  background-color: #ffffff;
  padding: 5px 0px 7px;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px;

  /* div span.appName {
    color: #ffffff;
  } */
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

export const HeaderSearchBoxWrapperElement = styled.div`
  display: block;
  position: relative;
  width: 100%;
`

export const HeaderSearchBoxContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 470px;
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

  @media (max-width: 800px) {
    display: none;
  }
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
      vertical-align: top;
      margin: -3px 0px 0px;
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
  left: 0px;
  right: 0px;
  top: 100%;
  box-shadow: rgba(0, 0, 0, .25) 1px 15px 15px 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  -webkit-border-bottom-left-radius: 4px;
  -webkit-border-bottom-right-radius: 4px;
  text-align: left;
`

export const HeaderSearchBoxResultPreviewList = styled.ul`
  background-color: #ffffff;
  list-style: none;
  padding: 0px;
  margin: 0px;
  overflow-y: auto;
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

export const HeaderSearchBoxResultThumb = styled(Image)`
  width: inherit;
  height: inherit;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: #dadeda;
  margin-right: 8px;
`

export const HeaderSearchBoxResultThumbContainer = styled.div`
  width: 32px;
  height: 32px;
`

export const HeaderSearchBoxResultTitle = styled.strong`
  display: block;
  width: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 12px;
`

export const HeaderSearchBoxResultSubTitle = styled.i`
  font-size: 11px;
  white-space: nowrap;
  color: #707070;
  text-transform: uppercase;
`

export const HeaderMenuButtonContainer = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  outline: 0px;
  border: 0px;
  font-size: 30px;
  margin: 6px 0px 0px 5px;
  cursor: pointer;
  width: 42px;
  height: 39px;
  position: relative;
  z-index: 16;

  &:hover {
    color: #ff6366;
  }

  &:active {
    color: #bd5456;
  }
`

export const MobileHeaderMenuWrapper = styled.div`
  box-shadow: rgb(0 0 0 / 20%) -6px 0px 20px 2px;
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  max-width: 414px;
  z-index: 15;
  /* border-left: 1px solid #c9c9c9; */
  animation: .7s ${bounceFromRight} ease-in-out;
  display: flex;
  flex-direction: column;

  li {
    width: 100%;
    display: block;
    margin: 0px;
    padding: 0px;
    
    a {
      display: block;
      padding: 30px 16px 32px;
      font-size: 26px;

      @media (min-width: 801px) {
        font-size: 20px;
        padding: 12px 16px 10px;
      }

      span {
        padding-left: 9px;
      }

      &:hover {
        background-color: #ebebeb;
        color: #303030;
      }

      &:active {
        background-color: #e0e0e0;
        color: #303030;
      } 
    }
  }
`

export const MobileHeaderMenuFooter = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 16px;
  border-top: 1px solid #ececec;
`

export const MobileHeaderMenuFooterLine = styled.div`
  width: 100%;
  height: auto;
  margin: 15px 0px;

  a {
    font-weight: 600;
    color: #808080;
    margin: 0px 5px 5px 0px;
  }

  span {
    color: #000000;
    text-transform: uppercase;
  }

  * {
    white-space: normal;
    user-select: none;
    -webkit-user-select: none;
  }
`

export const MobileHeaderMenuHeader = styled.div`
  width: 100%;
  height: auto;
`

export const MobileHeaderMenuBody = styled.div`
  width: 100%;
  height: 100%;
`

export const MobileHeaderMenuBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #ffffff;
  filter: brightness(130%);
  opacity: .8;
`

export const LoadingContainer = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 30px 20px;
`

export const HeaderSearchBoxResultPreviewFooter = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  display: flex;
  align-items: center;
  border-top: 1px solid #ececec;
`

export const TotalResults = styled.strong`
  display: block;
  white-space: nowrap;
  font-size: 13px;
  text-transform: uppercase;
  color: #777777;
`

export const ViewAllResultsLinkContainer = styled.div`
  width: 100%;
  text-align: right;

  a {
    font-weight: 700;
    color: #ff6366;
    font-size: 17px;
    padding: 3px 12px 6px;
    border-radius: 8px;

    &:hover {
      background-color: #ebebeb;
    }
  }
`
