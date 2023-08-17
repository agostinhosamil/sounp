import axios from 'axios'

export default async function googleScrapMusicLyric(request, response) {
  const url = "https://www.google.com/search"
  
  // const { artist, title } = request.query
  const artist = '7MZ'
  const title = 'Rap do Killua'

  const res = await axios.get(url, {
    params: {
      q: [artist, title, 'lyrics'].join(' ')
    }
  })

  response
    .status(200)
    .json({ data: res.data })
}
