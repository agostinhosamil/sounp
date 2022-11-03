import styled from 'styled-components'

import { Image } from '~/styles'

export const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 8px 0px 30px; 
`

export const Title = styled.h1`
  width: 100%;
  display: block;
  padding: 30px 0px;
  font-size: 54px;
  margin-bottom: 10px;
  color: #444444;
`

export const MusicContributorContainer = styled.div`
  width: 100%;
  max-width: 260px;
  height: 350px;
  background-color: #ffffff;
  border: 2px solid #cdcdcd;
  display: inline-block;
  margin: 0px 12px 12px 0px;
  border-radius: 7px;
  -webkit-border-radius: 7px;
  
  @media (min-width: 801px) {
    transition: transform .4s ease-in-out;

    &:hover {
      transform: scale3d(1.2, 1.2, 1.4) skew(1deg);
    }
  }
`

export const MusicContributorPictureContainer = styled.div`
  width: 100%;
  height: 260px;
  background-color: #d0d0d0;
`

export const MusicContributorPicture = styled(Image)`
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const MusicContributorData = styled.div`
  display: flex;
  padding: 15px;
  height: 85px;
  justify-content: center;
  align-items: center;

  span {
    font-size: 21px;
    color: #404041;
    word-break: break-word;
    max-height: 30px;
  }
`
