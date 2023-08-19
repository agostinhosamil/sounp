import styled from "styled-components"

import { Image } from '@styles'

export const Container = styled.div`
  position: relative;
  padding: 10px;
  width: 360px;
  height: 275px;
  display: flex;
`

export const CardLink = styled.a`
  display: block;
  width: 100%;
  height: auto;
  cursor: pointer;
  position: relative;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  transition: background-color .2s ease-in;
  border-radius: 8px;
  -webkit-border-radius: 8px;
`

export const Title = styled.h3`
  color: #444444;
  font-weight: 600;
  text-align: center;
  max-height: 90px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
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
  height: 132px;
  width: 100%;
  position: relative;
  border-radius: 8px;
  -webkit-border-radius: 8px;

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
  padding: 7px 0px 0px;
  margin: auto;
  font-size: 18px;
  color: #34669b;
  font-weight: 600;
  text-transform: uppercase;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  text-align: center;
`

export const ArtistPhoto = styled(Image)`
  width: 70px;
  height: 70px;
  background-color: #727272;
  border: 5px solid #a9a8a3;
  border-radius: 50%;
  -webkit-border-radius: 50%;
`

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  /* box-shadow: #4483c5 3px 4px 0px; */
`

export const Data = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  a {
    display: inherit;
    width: 100%;
    justify-content: inherit;
    flex-direction: inherit;
    padding: 8px;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    transition: background-color .4s ease-in-out;
    
    * {
      text-align: center;
    }

    &:hover {
      background-color: #e0e0e0;
    }

    &:active {
      background-color: #b0b0b0;
    }
  }
`
