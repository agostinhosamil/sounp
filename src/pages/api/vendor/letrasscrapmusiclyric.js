import axios from 'axios'
import { parse } from 'node-html-parser'
import decode from 'html-entities-decode'
import { remove as removeAccents } from 'remove-accents'

import { getYoutubeMusicLinkByRefs } from '@utils/getYoutubeMusicLinkByRefs'

export default async function letrasScrapMusicLyric(request, response) {
  const { artist, title } = request.query
  const musicProps = {}
  // const artist = '7 MINUTOZ'
  // const title = 'Rap do Killua'

  function parseData (data) {
    return removeAccents(data.split(/\s+/).join('-')).split(/[^a-zA-Z0-9_-]/).join('')
  }
  
  const [artistName, musicTitle] = [parseData(artist), parseData(title)]
  const url = `https://www.letras.mus.br/${artistName}/${musicTitle}`
  const musicYoutubeLink = await getYoutubeMusicLinkByRefs({ 
    artistName: artist, 
    musicTitle: title 
  })

  if (musicYoutubeLink) {
    // console.log('musicYoutubeLink => ', musicYoutubeLink)
    const youtubeUrlObject = new URL(musicYoutubeLink)
    const musicYoutubeId = youtubeUrlObject.searchParams.get('v')

    musicProps.youtubeUrl = musicYoutubeLink
    musicProps.youtubeEmbedUrl = `https://www.youtube.com/embed/${musicYoutubeId}`
  } else {
    console.log(musicYoutubeLink)
  }
  
  try {
    const res = await axios.get(url)

    const page = parse(res.data)

    const content = page.querySelector('div.lyric-original')

    const paragraphs = content.querySelectorAll('p')

    const paragraphsList = []

    paragraphs.forEach(paragraph => {
      const lineList = paragraph.innerHTML.split('<br>').map(line => (
        decode(line)
      ))
      
      paragraphsList.push(lineList)
    })
    // console.log(paragraphsList)

    response
      .status(200)
      .json({ 
        data: paragraphsList,  
        ...musicProps
      })
  } catch (err) {
    response
      .status(200)
      .json({ 
        data: [],  
        ...musicProps 
      })
  }
}
