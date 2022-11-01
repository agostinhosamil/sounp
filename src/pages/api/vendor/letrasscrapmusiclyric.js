import axios from 'axios'
import { parse } from 'node-html-parser'
import { remove as removeAccents } from 'remove-accents'
import decode from 'html-entities-decode'

export default async function letrasScrapMusicLyric(request, response) {
  const { artist, title } = request.query
  // const artist = '7 MINUTOZ'
  // const title = 'Rap do Killua'

  function parseData (data) {
    return removeAccents(data.split(/\s+/).join('-')).split(/[^a-zA-Z0-9_-]/).join('')
  }

  const url = `https://www.letras.mus.br/${parseData(artist)}/${parseData(title)}`

  try {
    const res = await axios.get(url)

    const page = parse(res.data)

    const content = page.querySelector('div.cnt-letra')

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
      .json({ data: paragraphsList })
  } catch (err) {
    response
      .status(500)
      .json({ data: [] })
  }
}
