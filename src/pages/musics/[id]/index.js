import { useEffect, useContext, useState, useRef } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import lyricsFinder from 'lyrics-finder'
// import { decodeEntity } from 'html-entities'

import { setSelectedMusic, unsetSelectedMusic } from '@reducers/selectedMusic'

import { AudioPlayer } from '@components/AudioPlayer'

import { MusicSiblings } from '@components/MusicSiblings'
import { MusicContributors } from '@components/MusicContributors'

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
  LyricParagraph
} from '@styles/musicStyles'

export default function Music ({ album, artist, trackList, ...music }) {
  // const playingMusicAudioContext = useSelector(state => state.playingMusic.audioContext)
  const dispatch = useDispatch()
  const [iframeHeight, setIframeHeight] = useState("")
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

  function decodeEntity (string) {
    // if (typeof document === 'object') {
    //   const t = document.createElement('div')

    //   t.innerHTML = string

    //   return t.innerText
    // } else {
      return string
    // }
  }

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
                  <LyricParagraph key={lyricParagraphIndex}>{decodeEntity(lyricParagraph)}</LyricParagraph>
                ))}
              </LyricParagraphGroup>
            ))}
          </LyricContainer>
        )}

        <MusicContributors contributors={music.contributors} />
      </MusicDataContainer>
      <MusicSiblings trackList={trackList} album={album} />
    </MusicDetailsContainer>
  )
}

export async function getServerSideProps (context) {

  const { id } = context.query

  var pathPrefix = ''

  if (context.req) {
    pathPrefix = `http://${context.req.headers.host}`
  }

  try {
    const response = await axios.get(`${pathPrefix}/api/musics/${id}`)

    const music = response.data

    const getTrackListResponse = await axios.get(music.album.tracklist)

    const { data: trackList } = getTrackListResponse.data

    const lyricsData = {
      content: null
    }

    try {
        // const lyrics = await lyricsFinder(music.artist.name, music.title)
      const getLyricsResponse = await axios.get(`${pathPrefix}/api/vendor/letrasscrapmusiclyric`, {
        params: {
          artist: music.artist.name,
          title: music.title
        }
      })

      const { data: lyrics } = getLyricsResponse.data

      // console.log("trackList0003 => ", getTrackListResponse.data.data)
      // console.log("Letras => ", lyrics)

      lyricsData.content = lyrics
    } catch (err) {
      const lyrics = await lyricsFinder(music.artist.name, music.title)

      if (lyrics) {
        lyricsData.content = [lyrics.split(/\n+/)]
      }
    }

    return { 
      props: { 
        ...music, 
        trackList: (
          typeof trackList !== typeof undefined &&
          trackList?.filter(track => track.id !== music.id)
        ),
        lyrics: lyricsData.content
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
