import { Fragment } from 'react'

import Skeleton from 'react-loading-skeleton'

import { 
  AlbumCoverImageWrapper,
  AlbumCoverImage,
  TitleSkeleton,
  ArtistPhoto,
  ArtistName,
  Container,
  Wrapper,
  Title,
  Data
} from './styles'

export function MusicCard ({ title, artist, album, loading }) {
  return (
    <Container>
      <Wrapper>
        <AlbumCoverImage src={album?.cover_medium}>
          {loading && <Skeleton height={290} />}
          <AlbumCoverImageWrapper>
            <ArtistPhoto src={artist?.picture_medium} />
          </AlbumCoverImageWrapper>
        </AlbumCoverImage>
        <Data>
          <Fragment>
            {!loading && <Title>{title}</Title> || (
              <TitleSkeleton>
                <Skeleton />
              </TitleSkeleton>
            )}
            
            {!loading && <ArtistName>{artist?.name}</ArtistName> || <Skeleton count={4} />}
          </Fragment>
        </Data>
      </Wrapper>
    </Container>
  )
}
