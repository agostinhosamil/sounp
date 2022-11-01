import { useEffect, useContext } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import lyricsFinder from 'lyrics-finder'

import { setSelectedMusic, unsetSelectedMusic } from '@reducers/selectedMusic'

import { AudioPlayer } from '@components/AudioPlayer'

import { MusicSiblings } from './_MusicSiblings'

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
} from './styles'

export default function Music ({ album, artist, trackList, ...music }) {
  // const playingMusicAudioContext = useSelector(state => state.playingMusic.audioContext)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSelectedMusic({ id: music.id }))

    return () => {
      dispatch(unsetSelectedMusic())
    }
  }, [dispatch, music.id])

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
        <h1 style={{fontSize: 50}}>Lyrics</h1>

        {music.lyrics instanceof Array && (
          <div>{music.lyrics.map ((lyricParagraphGroup, lyricParagraphGroupIndex) => (
            <div style={{padding: '20px', backgroundColor: 'teal', color: 'white', margin: '20px 0px'}} key={lyricParagraphGroupIndex}>
              {lyricParagraphGroup.map((lyricParagraph, lyricParagraphIndex) => (
                <p key={lyricParagraphIndex}>{lyricParagraph}</p>
              ))}
            </div>
          ))}</div>
        )}
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

    const lyricsData = {}

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
      console.log("Letras => ", lyrics)

      lyricsData.content = lyrics
    } catch (err) {
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


    console.log(err)

    return {
      props: { ...music }
    }
  }
}
