import Link from 'next/link'

import { 
  MusicSiblingContainer,
  MusicSiblingBody,
  MusicSiblingAlbumCoverContainer,
  MusicSiblingAlbumCover,
  MusicSiblingTrackDataContainer
} from './styles'

export function MusicSibling ({ title, id, album, showLyrics, ...music }) {

  const showMusicLyrics = Boolean(
    !!showLyrics 
    && music.lyrics instanceof Array
    && music.lyrics.length >= 1
  )

  return (
    <MusicSiblingContainer>
      <Link href={['/musics', id].join('/')}>
        <a>
          <MusicSiblingBody>
            <MusicSiblingAlbumCoverContainer>
              <MusicSiblingAlbumCover src={album?.cover_small} />
            </MusicSiblingAlbumCoverContainer>
            <MusicSiblingTrackDataContainer>
              <strong>{ title }</strong>
              {showMusicLyrics && (
                <ul>
                  {music.lyrics.map(line => <li key={line}>{line}</li>)}
                  <li>...</li>
                </ul>
              )}
            </MusicSiblingTrackDataContainer>
          </MusicSiblingBody>
        </a>
      </Link>
    </MusicSiblingContainer>
  )
}
