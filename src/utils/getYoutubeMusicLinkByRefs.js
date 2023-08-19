import axios from 'axios'
import { parse } from 'node-html-parser'

export async function getYoutubeMusicLinkByRefs ({ artistName, musicTitle }) {
  const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
  const googleSearchUrl = `https://www.google.com/search?q=site:youtube.com+${encodeURIComponent (artistName)}+${encodeURIComponent (musicTitle)}&sca_esv=557753954&gbv=1&sei=dvzdZIsPoYvBuQ-Q54JA`

  try {
    const googleSearchResponse = await axios.get(googleSearchUrl)
    
    if (googleSearchResponse.data) {
      const document = parse(googleSearchResponse.data)

      const linkElementContainer = document.querySelector('div.BNeawe.tAd8D.AP7Wnd')
      const alternativeLinkElementContainer = document.querySelector('div.egMi0.kCrYT')
    
      if (linkElementContainer) {
        const link = linkElementContainer.innerText?.trim()
        
        if (urlPattern.test(link)) {
          return link
        }
      }

      if (alternativeLinkElementContainer) {
        const alternativeLinkElement = alternativeLinkElementContainer.querySelector('a')

        if (alternativeLinkElement) {
          const alternativeLink = `https://www.google.com/${alternativeLinkElement.getAttribute('href')}`
          const alternativeLinkObject = new URL(alternativeLink)
          const alternativeLinkObjectQuery = alternativeLinkObject.searchParams.get('q')

          if (urlPattern.test(alternativeLinkObjectQuery)) {
            return alternativeLinkObjectQuery
          }
        }
      }
      
    }
  } catch (err) {
    // pass
    // console.log('Error => ', err)
  }
  
  return null
}
