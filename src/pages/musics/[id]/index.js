import { useEffect, useContext, useState, useRef } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { getMusicLyrics } from '@utils/getMusicLyrics'
// import { decodeEntity } from 'html-entities'

import { setSelectedMusic, unsetSelectedMusic } from '@reducers/selectedMusic'

import { AudioPlayer } from '@components/AudioPlayer'
import { MusicSiblings } from '@components/MusicSiblings'
import { MusicContributors } from '@components/MusicContributors'
import { getPathPrefixByContext } from '@utils/getPathPrefixByContext'

import {
  MusicDetailsContainer,
  MusicDataContainer,
  MusicAlbumCover,
  MusicArtistPhoto,
  MusicArtistDataWrapper,
  MusicArtistPhotoContainer,
  MusicArtistData,
  MusicTitle,
  MusicArtistName,
  LyricContainer,
  LyricTitle,
  LyricParagraphGroup,
  LyricParagraph,
  MusicSiblingsListsWrapper
} from '@styles/musicStyles'

export default function Music ({ album, artist, albumTrackList, ...music }) {
  // const playingMusicAudioContext = useSelector(state => state.playingMusic.audioContext)
  const dispatch = useDispatch()
  // const [iframeHeight, setIframeHeight] = useState("")
  const iframeRef = useRef()

  useEffect(() => {
    dispatch(setSelectedMusic({ id: music.id }))

    return () => {
      dispatch(unsetSelectedMusic())
    }
  }, [dispatch, music.id])

  useEffect(() => {
    if (iframeRef.current) {
      setIframeHeight(iframeRef.current.offsetWidth * 0.545)
    }
  }, [])

  albumTrackList = albumTrackList.map(track => ({ ...track, album }))

  return (
    <MusicDetailsContainer>
      <MusicDataContainer>
        <MusicAlbumCover src={album?.cover_xl} />
        <MusicArtistDataWrapper>
          <MusicArtistPhotoContainer>
            <MusicArtistPhoto src={artist?.picture_big} />
          </MusicArtistPhotoContainer>
          <MusicArtistData>
            <MusicTitle>
              {music.title}
            </MusicTitle>
            <MusicArtistName>
              {artist?.name}
            </MusicArtistName>
          </MusicArtistData>
        </MusicArtistDataWrapper>
        {music.explicit_lyrics && <span>Explicit</span>}

        {music.preview && <AudioPlayer artist={artist} album={album} {...music} />}

        <h1>Music Id = {music.id}</h1>

        {music.lyrics instanceof Array && (
          <LyricContainer>
            <LyricTitle>Lyrics</LyricTitle>
            {music.lyrics.map ((lyricParagraphGroup, lyricParagraphGroupIndex) => (
              <LyricParagraphGroup key={lyricParagraphGroupIndex}>
                {lyricParagraphGroup.map((lyricParagraph, lyricParagraphIndex) => (
                  <LyricParagraph key={lyricParagraphIndex}>{lyricParagraph}</LyricParagraph>
                ))}
              </LyricParagraphGroup>
            ))}
          </LyricContainer>
        )}

        <MusicContributors contributors={music.contributors} />
      </MusicDataContainer>
      <MusicSiblingsListsWrapper>
        <MusicSiblings trackList={albumTrackList}>
          <span>Other tracks from <i>{album.title}</i> album:</span>
        </MusicSiblings>
        <MusicSiblings trackList={music.artistTrackList}>
          <span>Other tracks from <i>{artist.name}</i></span>
        </MusicSiblings>
      </MusicSiblingsListsWrapper>
    </MusicDetailsContainer>
  )
}

export async function getServerSideProps (context) {

  const { id } = context.query

  const pathPrefix = getPathPrefixByContext(context)

  try {
    const response = await axios.get(`${pathPrefix}/api/musics/${id}`)

    const music = response.data

    const trackLists = {}

    try { // get album track list
      const getTrackListResponse = await axios.get(music.album.tracklist)

      const { data: albumTrackList } = getTrackListResponse.data

      if (albumTrackList instanceof Array) {
        trackLists.albumTrackList = albumTrackList.filter(track => track.id !== music.id)
      }
    } catch (err) {
      // pass
    }
    
    try { // get artist track list
      const getArtistTrackListResponse = await axios.get(music.artist.tracklist)

      const { data: artistTrackList } = getArtistTrackListResponse.data

      if (artistTrackList) {
        trackLists.artistTrackList = artistTrackList.filter(track => Boolean(
          track.id !== music.id &&
          track.album.id !== music.album.id
        ));
      }
    } catch (err) {
      // pass
    }

    const lyrics = await getMusicLyrics(music, { pathPrefix })

    return { 
      props: { 
        ...music, 
        ...trackLists,
        lyrics
      }
    }
  } catch (err) {
    const music = { id }

    // console.log(err)

    return {
      props: { ...music }
    }
  }
}
