import styled from 'styled-components'
import { Image } from '~/styles'

const userProfileAvatarSquareSize = 240

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
` 

export const UserProfileContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 0px 40px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0px;
  }
`

export const UserProfileMainContent = styled.main`
  width: 100%;
  padding-right: 40px;
  
  @media (max-width: 800px) {
    padding-right: 0px;
  }
`

export const UserProfileAsideContent = styled.aside`
  width: 100%;
  max-width: 280px;
`

export const UserProfileCoverPhotoWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: #e0e0e0;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  position: relative;

  @media (max-width: 800px) {
    border-radius: 0px;
    -webkit-border-radius: 0px;
  }
`

export const UserProfileCoverPhoto = styled(Image)`
  width: 100%;
  height: inherit;
  border-radius: inherit;
  -webkit-border-radius: inherit;
`

export const UserProfileAvatar = styled(Image)`
  width: ${userProfileAvatarSquareSize}px;
  height: ${userProfileAvatarSquareSize}px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  border: 8px solid #ffffff;
  position: absolute;
  bottom: -${userProfileAvatarSquareSize / 2}px;
  left: 0px;
  right: 0px;
  margin: auto;
`

export const UserProfileDataWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: ${userProfileAvatarSquareSize / 2}px 40px 0px;
  text-align: center;

  h1 {
    padding: 12px 0px 6px;
    font: 600 xxx-large "Trebuchet MS", "Arial", helvetica, sans-serif;
    color: #333333;
  }

  span {
    color: #939191;
    font-weight: 400;
    font-size: x-large;
  }

  p {
    padding: 20px 40px 0px;
    margin: 0px;
    color: #444444;
  }
`

export const UserProfileActionsWrapper= styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0px 30px;
  display: flex;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
`

export const UserProfileActionContainer = styled.div`
  display: flex;
  position: relative;
`

export const UserProfileActionElement = styled.button`
  display: flex;
  padding: 13px 10px 11px;
  margin: 4px;
  outline: 0px;
  border: 1px solid ${props => props.colored ? '#db5759' : '#dedede'};
  background-color: ${props => props.colored ? '#ff6366' : '#fbfbfb'};
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  position: relative;

  * {
    color: ${props => props.colored ? '#ffffff' : '#333333'};
  }

  &:hover {
    background-color: ${props => props.colored ? '#db4448' : '#f1f1f1'};
  }

  &:active {
    background-color: #ff6366;
    border-color: #db5759;

    * {
      color: #ffffff;
    }
  }

  div, label {
    display: flex;
    padding: 0px 5px;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`

export const UserProfileActionIconWrapper = styled.div`
  margin: 0px;
`

export const UserProfileActionLabel = styled.label`
  margin: 0px;
`

export const UserProfileActionDropDownElement = styled.ul`
  width: 348px;
  background-color: white;
  border: 1px solid #e5e5e5;
  position: absolute;
  left: 0px;
  top: 100%;
  border-radius: 7px;
  list-style: none;
  z-index: 1000;
  padding: 12px 0px;
  outline: 0px;

  hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
    border-color: #f3f3f3;
    pointer-events: none;
  }
`

export const UserProfileActionDropDownBackButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding-bottom: 12px;
`

export const UserProfileActionDropDownBackButton = styled.button`
  cursor: pointer;
  width: 100%;
  font-size: 21px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  padding: 9px 17px 8px;
  
  &:hover {
    background-color: #ebebeb;
  }
`

export const UserProfileActionDropDownItemWrapper = styled.li`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  list-style-type: none;

  a {
    width: 100%;
    height: auto;
    display: flex;
    position: inherit;
    padding: 8px 17px;

    &:hover {
      background-color: #ebebeb;
    }

    &:active {
      background-color: #ff6666;

      * {
        color: #ffffff;
      }
    }

    * {
      font-size: 17px;
      display: flex;
      /* justify-content: center; */
      align-items: center;
    }
  }
`

export const UserProfileActionDropDownIconWrapper = styled.div`
  padding: 0px 8px 0px 0px;
`

export const UserProfileActionDropDownItemLabelWrapper = styled.div`
  width: 100%;
`

export const UserProfileActionDropDownItemLabel = styled.span`
  color: #333333;
  display: block;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  text-align: left;
`


export const UserProfileAlbumsWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  padding: 0px 30px 40px;

  h2 {
    color: #555555;
    font-weight: 500;
  }
`

export const UserProfileAlbumsList = styled.div`
  width: 100%;
  padding: 20px 0px;
`

export const UserProfileAlbumContainer = styled.div`
  width: 230px;
  background-color: #fbfbfb;
  border: 1px solid #cdcdcd;
  padding: 6px;
  border-radius: 5px;
  display: inline-block;
  margin: 0px 9px 0px 0px;
  cursor: pointer;

  &:hover {
    background-color: #cecece;
  }

  &:active {
    background-color: #f36666;
    border-color: #cd5555;

    * {
      color: #ffffff;
    }
  }

  * {
    user-select: none;
    -webkit-user-select: none;
    pointer-events: none;
  }
`

export const UserProfileAlbumBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  border-radius: inherit;
  margin: 6px;
`

export const UserProfileAlbumCoverWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: inherit;
`

export const UserProfileAlbumCover = styled(Image)`
  width: inherit;
  height: inherit;
  border-radius: inherit;
  margin: 0px 12px 0px 0px;
`

export const UserProfileAlbumDataWrapper = styled.div`
  width: 100%;
  margin: 0px 7px;
  text-align: left;
  font-size: 15px;
  word-wrap: break-word;
  word-break: break-word;

  strong {
    width: 100%;
    display: block;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    white-space: normal;
  }
`

export const UserProfileAlbumsListWrapperContainer = styled(Container)`
  white-space: nowrap;
  overflow: hidden;
  max-width: 100px;
`
