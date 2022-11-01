import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  border: 1px solid #cdcdcd;
  width: 320px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  box-shadow: rgba(0, 0, 0, .4) 2px 5px 12px 2px;
  z-index: 100;
  padding: 12px;

  /* a {
    display: block;
    width: 100%;
    height: 120px;
  } */
`

export const Header = styled.header`
  width: 100%;
  padding: 7px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  cursor: pointer;

  &:hover ~ div a {
    background-color: #f2f2f2;
  }
`

export const HeaderButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const HeaderButtonContainer = styled.a`
  display: inline-block;
  margin: 0px 7px;
  box-shadow: rgba(0, 0, 0, .40) -1px 3px 12px 2px;
  background-color: #e6e7e7;
  padding: 2px;
  border: 1px solid #afafaf;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 32px;
  display: flex;
  height: 32px;
  justify-content: center;
  align-items: center;
  
  &:hover {
    color: red;
  }
`

export const Main = styled.div`
  display: flex;
  width: 100%;
`

export const PictureContainer = styled.div`
  width: 98px;
  height: 98px;
  position: relative;
  z-index: 1;
`

export const Picture = styled.div`
  width: inherit;
  height: inherit;
  background-color: #ede0e0;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  background-attachment: scroll;
  background-position: 0px 0px;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
`

export const DataContainer = styled.div`
  width: 100%;
  padding: 0px 0px 0px 13px;

  a {
    display: block;
    width: 100%;
    height: auto;
    padding: 6px;
    border-radius: 8px;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`

export const Title = styled.h3`
  display: block;
  width: 100%;
  max-height: 80px;
  overflow: hidden;
  font-size: 16px;
`

export const SubTitle = styled.h4`
  width: 166px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: #a0a0a0;
  padding-top: 5px;
`

export const PlayButtonContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlayButton = styled.button.attrs({
  type: 'button'
})`
  background: transparent none repeat scroll 0%;
  color: #ffffff;
  cursor: pointer;
  font-size: 50px;
  padding: 0px;
  height: 50px;
  text-shadow: rgba(244, 243, 234, .5);
  border: 0px;
  outline: 0px;
`
