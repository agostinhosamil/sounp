import styled from 'styled-components'

import { Image } from '@styles'

export const MusicSiblingsContainer = styled.div`
  width: 100%;
  display: block;
  padding: 0px 0px 25px;
`

export const MusicSiblingsTitle = styled.h4`
  color: #9b9797;
  padding: 0px 0px 15px;
  font: 700 21px "Roboto Black", "Arial Black", "Arial", "Helvetica", sans-serif;

  i {
    font-style: italic;
    color: #ffffff;
    background-color: #bf7672;
  }
`

export const MusicSiblingsList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  position: relative;

  li {
    list-style-type: none;
  }
`

export const MusicSiblingContainer = styled.li`
  width: 100%;
  display: block;
  margin: 0px 0px 13px;

  a {
    width: 100%;
    display: block;
    padding: 12px;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    background-color: #ffffff;
    transition: background-color .3s ease-in-out;

    &:hover {
      background-color: #f1f1f1;
    }

    &:active {
      background-color: #f7a27b;

      strong {
        color: #ffffff;
      }
    }
  }
`

export const MusicSiblingBody = styled.div`
  width: 100%;
  height: auto;
  display: block;
  display: flex;
`

export const MusicSiblingAlbumCoverContainer = styled.div`
  width: 75px;
  height: 75px;
`

export const MusicSiblingAlbumCover = styled(Image)`
  width: inherit;
  height: inherit;
  background-color: #c0c0c0;
  border-radius: 8px;
  -webkit-border-radius: 8px;
`

export const MusicSiblingTrackDataContainer = styled.div`
  width: 100%;
  margin-left: 8px;

  strong {
    display: block;
    width: 100%;
    word-break: break-word;
    font-weight: 300;
    font-size: 16px;
    padding-bottom: 7px;
    font-weight: 700;
    color: #444444;
    pointer-events: none;
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    
    li {
      list-style-type: none;
      color: #909090;
      font-size: 13px;
      word-spacing: 4px;
      letter-spacing: 1px;
      line-height: 19px;
    }
  }
`

export const PaginationLinksWrapper = styled.div`
  width: 100%;
  display: block;
  padding: 12px 0px;

  a {
    margin-right: 8px;
    font-size: 25px;
    display: inline-block;
    padding: 8px 8px 6px;

    svg {
      cursor: none;
      pointer-events: none;
      user-select: none;
    }

    &:hover {
      color: orangered;
    }
  }
`
