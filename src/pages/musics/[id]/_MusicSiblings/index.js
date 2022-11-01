import { Fragment, useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

import { MusicSibling } from './MusicSibling'

import {
  MusicSiblingsContainer,
  MusicSiblingsTitle,
  MusicSiblingsList,
  PaginationLinksWrapper
} from './styles'

export function MusicSiblings ({ trackList, album }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!(trackList instanceof Array &&  trackList.length >= 1)) {
    return <Fragment />
  }

  const LIST_MAX_LENGTH = 7

  const paginationButtonHandler = (event) => {
    event.preventDefault()

    const action = event.target.getAttribute('action')

    if (action === 'prev') {
      setCurrentIndex((currentIndex - LIST_MAX_LENGTH) < 0 ? 0 : currentIndex - LIST_MAX_LENGTH)
    } else if (action === 'next') {
      setCurrentIndex(currentIndex + LIST_MAX_LENGTH)
    }
  }

  const listHasMoreItems = () => Boolean(trackList[currentIndex + LIST_MAX_LENGTH + 1])

  return (
    <MusicSiblingsContainer>
      <MusicSiblingsTitle>
        Other tracks from <i>{album.title}</i> album:
      </MusicSiblingsTitle>
      <MusicSiblingsList>
        {trackList.slice(currentIndex, currentIndex + LIST_MAX_LENGTH).map(track => (
          <MusicSibling key={track.id} album={album} {...track} />)
        )}
      </MusicSiblingsList>
      <PaginationLinksWrapper>
        {currentIndex >= LIST_MAX_LENGTH && (
          <a href="#" action="prev" onClick={paginationButtonHandler}>
            <SlArrowLeft />
          </a>
        )}
        {listHasMoreItems() && (
          <a href="#" action="next" onClick={paginationButtonHandler}>
            <SlArrowRight />
          </a>
        )}
      </PaginationLinksWrapper>
    </MusicSiblingsContainer>
  )
}
