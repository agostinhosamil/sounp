import styled from "styled-components"

const Image = styled.div`
  background-attachment: scroll;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const Container = styled.div`
  position: relative;
  padding: 10px;
  width: 360px;
  height: 470px;
  display: flex;
`

export const Title = styled.h3`
  color: #444444;
  font-weight: 600;
  text-align: center;
  max-height: 90px;
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  overflow-y: hidden;
`

export const TitleSkeleton = styled.div`
  font-size: 25px;
  display: block;
  width: 100%;
  margin-bottom: 9px;
`

export const AlbumCoverImage = styled(Image)`
  border-bottom: 1px solid #cdcdcd;
  background-color: #d0d0d0;
  height: 290px;
  width: 100%;
  background-image: url(${props => props.src});
  position: relative;

  span.react-loading-skeleton {
    line-height: inherit;
  }
`

export const AlbumCoverImageWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 10px;
`

export const ArtistName = styled.span`
  display: inline-block;
  padding: 7px 0px;
  margin: auto;
  font-size: 18px;
  color: #34669b;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: #303030;
  }
`

export const ArtistPhoto = styled(Image)`
  width: 70px;
  height: 70px;
  background-color: #727272;
  border: 5px solid #a9a8a3;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  background-image: url(${props => props.src});
`

export const Wrapper = styled.div`
  background-color: #ffffff;
  border: 2px solid #4483c5;
  width: 100%;
  height: auto;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  box-shadow: #4483c5 3px 4px 0px;
`

export const Data = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
