import axios from 'axios'
import { SWRConfig } from 'swr'
import { arraySplit } from 'array-split-base'

import { useFetch } from '@utils/useFetch'
import { queryList } from '@config/constants'
import { MusicCard } from '@components/MusicCard'

import { Loading as LoadingSpinner } from '~/components/Loading'

import { MusicFeedContainer, MusicFeedLine, Container } from '@styles'
import { useEffect, useState, useRef } from 'react'
import { range, dropDuplicatedArrayElements } from '~/utils/helper'

const Error = ({ message }) => <h1>Error..! :) {message || ''}</h1>

function Home() {
  const query = queryList.getRandom()
  const musicCardWidth = 360

  const { data, error } = useFetch('/search', { 
    params: { 
      q: query 
    }
  })

  const [feedLineContentLength, setFeedLineContentLength] = useState(4)
  const [highlightMusics, setHighlightMusics] = useState([])
  const [nextLink, setNextLink] = useState(null)
  const [feedContentLoading, setFeedContentLoading] = useState(false)

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

    setFeedContentLoading(false)
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
  
  const viewNextFeedContentButtonClickHandler = (event) => {
    setFeedContentLoading(true)
    viewNextFeedContentHandler({ event, next: nextLink || next })
  }

  const lines = arraySplit(dropDuplicatedArrayElements([...highlights, ...highlightMusics]), feedLineContentLength)

  return (
    <Container>
      <MusicFeedContainer>
        {lines.map((line, index) => (
          <MusicFeedLine key={index}>
            {line.map(highlight => <MusicCard key={highlight.id} {...highlight} />)}
          </MusicFeedLine>
        ))}

        <div>
          <a 
            style={{ opacity: 0 }} 
            ref={viewNextFeedContentButtonRef} 
            href="#" 
            onClick={viewNextFeedContentButtonClickHandler}>
            Next
          </a>
        </div>

        {feedContentLoading && (
          <div>
            <LoadingSpinner size={50} />
          </div>
        )}
      </MusicFeedContainer>
    </Container>
  )
}

export default function HomePage ({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  )
}

export const getServerSideProps = async (context) => {
  var pathPrefix = ''

  if (context.req) {
    pathPrefix = `http://${context.req.headers.host}`
  }

  const query = queryList.getRandom()

  try {
    const response = await axios.get(`${pathPrefix}/api/search`, {
      params: { q: query }
    })

    return {
      props: {
        fallback: {
          '/api/search': response.data
        }
      }
    }
  } catch (err) {
    console.log(err)

    return {
      props: {
        fallback: {
          '/api/search': []
        }
      }
    }
  }
}
