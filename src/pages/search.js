import { useState, useRef, useEffect } from 'react'
import { SlMagnifier } from 'react-icons/sl'
import axios from 'axios' 

import { decodeURI, dropDuplicatedArrayElements, encodeURI } from '@utils/helper'
// import { getMusicLyricSummary } from '@utils/getMusicLyrics'
import { getPathPrefixByContext } from '@utils/getPathPrefixByContext'

import { Loading } from '@components/Loading'
import { HeaderSearchBoxResultPreview } from '@components/HeaderMenu/HeaderSearchBoxResultPreview'
import { MusicSibling } from '@components/MusicSiblings/MusicSibling'

import { 
  SearchBoxContainer,
   SearchBoxTitle,
   SearchBoxSubTitle,
   SearchBoxTextFieldContainer,
   SearchBoxTextField,
   SearchIconContainer,
   SearchResultsContainer,
   SearchResultsCount,
   SearchResultsList
} from '@styles/pages/search'

function SearchBox () {
  const [query, setQuery] = useState('')
  const [showPreview, setShowPreview] = useState(false)
   
  function inputChangeHandler (event) {
    setQuery(event.target.value)
  }

  function inputFocusHandler (event) {
    setShowPreview(true)
  }

  function inputBlurHandler () {
    setTimeout(() => setShowPreview(!showPreview), 200)
  }

  return (
    <SearchBoxContainer>
      <SearchBoxTitle>
        <SlMagnifier />
        <span>Search</span>
      </SearchBoxTitle>
      <SearchBoxSubTitle>
        Write your query bellow
      </SearchBoxSubTitle>
      <SearchBoxTextFieldContainer>
        <SearchIconContainer>
          <SlMagnifier />
        </SearchIconContainer>
        <SearchBoxTextField 
          onChange={inputChangeHandler} 
          onFocus={inputFocusHandler} 
          onBlur={inputBlurHandler} 
          defaultValue={query}
          />
        {/\S/.test(query) && showPreview && (
          <HeaderSearchBoxResultPreview query={query} />
        )}
      </SearchBoxTextFieldContainer>
    </SearchBoxContainer>
  )
}

async function getSearchResults (url, pathPrefix = '') {
  try {
    const response = await axios.get(`${pathPrefix}/api/search/next`, {
      params: {
        next: decodeURI(url)
      }
    })

    const { results: searchResults, ...data } = response.data

    const results = await Promise.all(searchResults.map(async result => {
      const lyrics = [] // await getMusicLyricSummary(result, { pathPrefix, maxLength: 70 })

      return {
        ...result,
        lyrics
      }
    }))

    return {
      ...data,
      results
    }
  } catch (err) {
    console.log(err)
    // pass
  }

  return {}
}

export default function Search ({ results: initialResults, total, ...props }) {
  const [results, setResults] = useState(initialResults)
  const [nextPage, setNextPage] = useState(props.next)
  const [loading, setLoading] = useState(false)

  const nextPageLinkRef = useRef()

  useEffect(() => {
    setResults(initialResults)
    setNextPage(props.next)
  }, [initialResults, props.next])

  useEffect(() => {    
    const pageScrollHandler = () => {
      // console.log([window.scrollTop + window.innerHeight, window.scrollHeight])
      if (window.scrollY + window.innerHeight >= window.document.body.scrollHeight) {
        // console.log(event)
        nextPageLinkRef.current?.click()
      }
    }

    window.addEventListener ('scroll', pageScrollHandler, true)

    return () => {
      window.removeEventListener('scroll', pageScrollHandler, true)
    }
  }, [])

  if (!(results instanceof Array)) {
    return <SearchBox />
  }

  const nextPageLinkClickHandler = async (event) => {
    event.preventDefault()

    setLoading(true)

    const { results: searchResults, next } = await getSearchResults(nextPage)

    if (searchResults) {
      if (window.history.replaceState) {
        window.history.replaceState(null, null, `?next=${encodeURI(next)}`)
      }
  
      setResults([...results, ...searchResults])
    }

    setNextPage(next || null)
    
    setLoading(false)
  }

  // console.log("Next Page:", decodeURI(nextPage))

  return (
    <SearchResultsContainer>
      <SearchResultsCount>
        Search results: {total}
      </SearchResultsCount>
      <SearchResultsList>
        {dropDuplicatedArrayElements(results).map(result => (
          <MusicSibling key={result.id} showLyrics={true} {...result} />
        ))}
      </SearchResultsList>
      {loading && <Loading size={50} />}
      {nextPage && (
        <a 
          href={`/search/?next=${nextPage}`} 
          ref={nextPageLinkRef}
          onClick={nextPageLinkClickHandler}>
          Next
        </a>
      )}
      {results.length >= 1 && !nextPage && <span>No more results</span>}
      {results.length < 1 && <span>No results</span>}
    </SearchResultsContainer>
  )
}

export const getServerSideProps = async (context) => {
  const { query } = context

  const pathPrefix = getPathPrefixByContext(context)
  const searchResultsData = await getSearchResults(query.next, pathPrefix)

  // console.log('Total => ', searchResultsData.total)
  // console.log('Next => ', searchResultsData.next)

  if (searchResultsData.results) {
    return {
      props: {
        ...searchResultsData,
        query
      }
    }
  }

  return {
    props: { query }
  }
}
