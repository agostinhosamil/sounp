import axios from 'axios'
import lyricsFinder from 'lyrics-finder'

export async function getMusicLyrics (music, {pathPrefix = ''}) {
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

    lyricsData.content = lyrics
  } catch (err) {
    const lyrics = await lyricsFinder(music.artist.name, music.title)

    if (lyrics) {
      lyricsData.content = [lyrics.split(/\n+/)]
    }
  }

  return lyricsData.content
}

export async function getMusicLyricSummary (music, {pathPrefix = '', maxLength = 255}) {
  const musicLyrics = await getMusicLyrics(music, { pathPrefix })
  
  if (!(musicLyrics instanceof Array)) {
    return [] 
  }

  const [lyricsFirstParagraphGroup] = musicLyrics

  const paragraphStr = lyricsFirstParagraphGroup.join('\n')

  const paragraphStrNewLineCount = paragraphStr.split(/\n/).length

  return paragraphStr.slice(0, maxLength + paragraphStrNewLineCount).split(/\n/)
}
