import styled from 'styled-components'

export const Image = styled.div`
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-image: url(${props => props.src});
`

export const MusicDetailsContainer = styled.div.attrs({id: 'main'})`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  padding: 30px;
` 

export const MusicDataContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
`

export const MusicAlbumCover = styled(Image)`
  width: 100%;
  height: 430px;
  background-color: #d0d0d0;
  box-shadow: rgba(0,0,0,.4) 0px 3px 5px 0px;
  position: relative;
`

export const MusicArtistDataWrapper = styled.div`
  width: 100%;
  padding: 30px 0px 40px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
`

export const MusicArtistPhotoContainer = styled.div`
  height: 170px;
  padding-right: 25px;
`

export const MusicArtistPhoto = styled(Image)`
  width: 170px;
  height: 170px;
  background-color: #d0d0d0;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  border: 5px solid #a3a0a0;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
`

export const MusicArtistData = styled.div`
  width: 100%;
`

export const MusicTitle = styled.h1`
  color: #333333;
  font-size: 48px;
`

export const MusicArtistName = styled.h3`
  color: #9f9898;
  font-size: 31px;
  text-transform: uppercase;
`

