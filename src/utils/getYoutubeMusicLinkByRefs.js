import axios from 'axios'
import { parse } from 'node-html-parser'

export async function getYoutubeMusicLinkByRefs ({ artistName, musicTitle }) {
  const googleSearchUrl = `https://www.google.com/search?q=site:youtube.com+${encodeURIComponent (artistName)}+${encodeURIComponent (musicTitle)}&sca_esv=557753954&gbv=1&sei=dvzdZIsPoYvBuQ-Q54JA`

  try {
    const googleSearchResponse = await axios.get(googleSearchUrl)
    
    if (googleSearchResponse.data) {
      const document = parse(googleSearchResponse.data)

      const linkElementContainer = document.querySelector('div.BNeawe.tAd8D.AP7Wnd')
    
      return linkElementContainer.innerText?.trim()
    }

  } catch (err) {
    // pass
  }
  
  return null;
}
