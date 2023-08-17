import { Fragment } from 'react'
import Link from 'next/link'

import { LoadingMusicCardContent } from './LoadingMusicCardContent'

import {
  AlbumCoverImageWrapper,
  AlbumCoverImage,
  ArtistPhoto,
  ArtistName,
  Container,
  CardLink,
  Wrapper,
  Title,
  Data
} from './styles'

export function MusicCard({ title, artist, album, loading, id }) {

  const href = `/musics/${id}/`

  const albumCoverImageRef = (albumCoverImageElement) => {
    if (albumCoverImageElement) {
      const albumCoverImageElementWidth = albumCoverImageElement.offsetWidth

      albumCoverImageElement.style.height = `${albumCoverImageElementWidth * 0.5}px`
    }
  }

  return (
    <Container>
      <Link href={href}>
        <CardLink href={href}>
          <Wrapper>
            {loading && <LoadingMusicCardContent /> || (
              <Fragment>
                <AlbumCoverImage
                  src={album?.cover_medium}
                  ref={albumCoverImageRef}>
                  <AlbumCoverImageWrapper>
                    <ArtistPhoto src={artist?.picture_medium} />
                  </AlbumCoverImageWrapper>
                </AlbumCoverImage>
                <Data>
                  <Title>{title}</Title>
                  <ArtistName>{artist?.name}</ArtistName>
                </Data>
              </Fragment>
            )}
          </Wrapper>
        </CardLink>
      </Link>
    </Container>
  )
}
