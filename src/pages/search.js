import { useState } from 'react'
import { SlMagnifier } from 'react-icons/sl'

import { decodeURI } from '@utils/helper'

import { HeaderSearchBoxResultPreview } from '@components/HeaderMenu/HeaderSearchBoxResultPreview'

import { 
  SearchBoxContainer,
   SearchBoxTitle,
   SearchBoxSubTitle,
   SearchBoxTextFieldContainer,
   SearchBoxTextField,
   SearchIconContainer
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

export default function Search ({ query }) {
  const { next } = query

  if (!(typeof next === typeof 'str' && /\S/.test(next))) {
    return (
      <SearchBox />
    )
  }

  return <div>Search results: {decodeURI(next)}</div>
}

export const getServerSideProps = ({ query }) => {
  return {
    props: { query }
  }
}
