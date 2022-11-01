import { useRef, useEffect } from 'react'

import { useFetch } from '@utils/useFetch'
import { elementOffsetY } from '@utils/helper'

import { HeaderSearchBoxResult } from './HeaderSearchBoxResult'

import { 
  HeaderSearchBoxResultPreviewContainer, 
  HeaderSearchBoxResultPreviewList 
} from './styles'

export function HeaderSearchBoxResultPreview ({ query }) {
  const containerRef = useRef()

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const y = elementOffsetY(containerRef.current)

    const elementMaxHeight = (window.innerHeight - y) - 20;

    containerRef.current.style.cssText = `max-height: ${elementMaxHeight}px;`;
  }, [])

  query = encodeURIComponent(query)

  const { data, error } = useFetch(`/search?ref=header&q=${query}`)

  const Error = () => (
    <HeaderSearchBoxResultPreviewContainer ref={containerRef}>
      <span>Error :(</span>
    </HeaderSearchBoxResultPreviewContainer>
  )

  if (error) {
    return <Error />
  }

  if (!data) {
    return (
      <HeaderSearchBoxResultPreviewContainer ref={containerRef}>
        <span>Loading...</span>
      </HeaderSearchBoxResultPreviewContainer>
    )
  }

  const { results, total, next } = data

  if (!(results instanceof Array)) {
    return <Error />
  }

  return (
    <HeaderSearchBoxResultPreviewContainer ref={containerRef}>
      <HeaderSearchBoxResultPreviewList>
        {results.map(music => <HeaderSearchBoxResult key={music.id} {...music} />)}

        {results.length < 1 && (
          <span>No results</span>
        )}
      </HeaderSearchBoxResultPreviewList>
    </HeaderSearchBoxResultPreviewContainer>
  )
}
