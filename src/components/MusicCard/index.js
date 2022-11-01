// import { Fragment } from 'react'
import Link from 'next/link'
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

export function MusicCard ({ title, artist, album, loading, id }) {
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
          <Link href={['/musics', id].join('/')}>
            <a>
              {!loading && <Title>{title}</Title> || (
                <TitleSkeleton>
                  <Skeleton />
                </TitleSkeleton>
              )}
              
              {!loading && <ArtistName>{artist?.name}</ArtistName> || <Skeleton count={4} />}
            </a>
          </Link>
        </Data>
      </Wrapper>
    </Container>
  )
}
