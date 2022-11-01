import axios from 'axios'
import { arraySplit } from 'array-split-base'

import { useFetch } from '@utils/useFetch'
import { queryList } from '@config/constants'
import { MusicCard } from '@components/MusicCard'

import { MusicFeedContainer, MusicFeedLine, Container } from '@styles'
import { useEffect, useState, useRef } from 'react'
import { range } from '~/utils/helper'

const Error = ({ message }) => <h1>Error..! :) {message || ''}</h1>

export default function Home() {
  const query = queryList[Math.round(Math.random() * (queryList.length - 1))]
  const musicCardWidth = 360

  const { data, error } = useFetch('/search', { 
    params: { 
      q: query 
    } 
  })

  const [feedLineContentLength, setFeedLineContentLength] = useState(4)
  const [highlightMusics, setHighlightMusics] = useState([])
  const [nextLink, setNextLink] = useState(null)

  const viewNextFeedContentButtonRef = useRef()

  function getFeedLineContentLength () {
    return global.window && Math.round(window.innerWidth / musicCardWidth)
  }

  async function viewNextFeedContentHandler ({ event, next }) {
    event.preventDefault()

    if (next) {
      const response = await axios.get('/api/search/next', {
        params: { next }
      })

      if (response.data) {
        const { results, next } = response.data

        setNextLink(next)
        // console.log(response.data)
        setHighlightMusics([...highlightMusics, ...results])
      }
    }
  }  

  // useEffect(() => {
  //   setFeedLineContentLength(getFeedLineContentLength())
  //   // console.log("feedLineContentLength => ", feedLineContentLength)
  // }, [feedLineContentLength])

  useEffect(() => {
    setFeedLineContentLength(getFeedLineContentLength())
    // window.onresize = )
    window.addEventListener ('resize', ()  =>{
      setFeedLineContentLength(getFeedLineContentLength())
    })

    const pageScrollHandler = (event) => {
      // console.log([window.scrollTop + window.innerHeight, window.scrollHeight])
      if (window.scrollY + window.innerHeight >= window.document.body.scrollHeight) {
        // console.log(event)
        viewNextFeedContentButtonRef.current?.click()
      }
    }

    window.addEventListener ('scroll', pageScrollHandler, true)

    return () => {
      window.removeEventListener('scroll', pageScrollHandler, true)
    }
  }, [])

  const Loading = () => {
    const skeletonMusicCards = range(1, 25)

    const lines = arraySplit(skeletonMusicCards, feedLineContentLength)

    return (
      <MusicFeedContainer>
        {lines.map((line, index) => (
          <MusicFeedLine key={index}>
            {line.map(highlight => <MusicCard key={highlight} loading={true} />)}
          </MusicFeedLine>
        ))}
      </MusicFeedContainer>
    )
  }

  if (error) {
    return <Error />
  }
  
  if (!data) {
    return <Loading />
  }

  const { results: highlights, total, next } = data

  if (!(highlights instanceof Array)) {
    return <Error message="Not an array" />
  }

  const musicsIds = []

  const feedLineContentFilter = music => {
    if (musicsIds.indexOf(music.id) < 0) {
      musicsIds.push(music.id)

      return true
    }

    return false
  }

  const lines = arraySplit([...highlights, ...highlightMusics].filter(feedLineContentFilter), feedLineContentLength)

  return (
    <Container>
      <MusicFeedContainer>
        {lines.map((line, index) => (
          <MusicFeedLine key={index}>
            {line.map(highlight => <MusicCard key={highlight.id} {...highlight} />)}
          </MusicFeedLine>
        ))}

        <div>
          <a style={{ opacity: 0 }} ref={viewNextFeedContentButtonRef} href="#" onClick={event => viewNextFeedContentHandler({ event, next: nextLink || next })}>Next</a>
        </div>
      </MusicFeedContainer>
    </Container>
  )
}

// Home.getInitialProps = async function getInitialProps() {
//   return {}
// }
