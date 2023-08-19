import styled from 'styled-components'

import { Image } from '~/styles'

export const AccountHeaderContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 25px 16px;
  border-bottom: 1px solid #ececec;
  display: block;
`

export const AccountHeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`

export const AccountPhotoWrapper = styled.div`
  display: block;
  width: 45px;
  height: 45px;
  margin: 0px 12px 0px 0px;
`

export const AccountPhoto = styled(Image)`
  width: inherit;
  height: inherit;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  border: 1px solid #cdcdcd;
  background-color: #bebebe;
`

export const AccountData = styled.div`
  width: 100%;
  word-break: break-word;
  margin-top: -7px;

  strong {
    color: #202020;
    font-weight: 700;
    font-size: 24px;
  }

  span {
    color: #837f7f;
    font-weight: 300;
    font-size: 15px;
  }

  * {
    display: block;
    word-break: inherit;
    white-space: normal;
    user-select: none;
    -webkit-user-select: none;
  }
`
