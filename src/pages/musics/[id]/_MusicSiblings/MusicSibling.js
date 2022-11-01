import Link from 'next/link'

import { 
  MusicSiblingContainer,
  MusicSiblingBody,
  MusicSiblingAlbumCoverContainer,
  MusicSiblingAlbumCover,
  MusicSiblingTrackDataContainer
} from './styles'

export function MusicSibling ({ title, id, album }) {

  return (
    <MusicSiblingContainer>
      <Link href={['/musics', id].join('/')}>
        <a>
          <MusicSiblingBody>
            <MusicSiblingAlbumCoverContainer>
              <MusicSiblingAlbumCover src={album?.cover_small} />
            </MusicSiblingAlbumCoverContainer>
            <MusicSiblingTrackDataContainer>
              <span>{ title }</span>
            </MusicSiblingTrackDataContainer>
          </MusicSiblingBody>
        </a>
      </Link>
    </MusicSiblingContainer>
  )
}
