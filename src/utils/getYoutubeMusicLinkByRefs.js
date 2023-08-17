import axios from 'axios'
import { parse } from 'node-html-parser'

export async function getYoutubeMusicLinkByRefs ({ artistName, musicTitle }) {
  const googleSearchUrl = `https://www.google.com/search?q=site:youtube.com+${encodeURIComponent (artistName)}+${encodeURIComponent (musicTitle)}&sca_esv=557753954&gbv=1&sei=dvzdZIsPoYvBuQ-Q54JA`

  try {
    const googleSearchResponse = await axios.get(googleSearchUrl)
    
    if (googleSearchResponse.data) {
      const document = parse(googleSearchResponse.data)

      const linkElementContainer = document.querySelector('div.BNeawe.tAd8D.AP7Wnd')
      const alternativeLinkElementContainer = document.querySelector('div.egMi0.kCrYT')
    
      if (linkElementContainer) {
        return linkElementContainer.innerText?.trim()
      }

      if (alternativeLinkElementContainer) {
        const alternativeLinkElement = alternativeLinkElementContainer.querySelector('a')

        if (alternativeLinkElement) {
          const alternativeLink = `https://www.google.com/${alternativeLinkElement.getAttribute('href')}`
          const alternativeLinkObject = new URL(alternativeLink)

          return alternativeLinkObject.searchParams.get('q')
        }
      }
      
    }
  } catch (err) {
    // pass
    console.log('Err => ', err)
  }
  
  return null;
}
