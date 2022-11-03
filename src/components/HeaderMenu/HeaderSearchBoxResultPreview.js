import { useRef, useEffect } from 'react'
import Link from 'next/link'

import { useFetch } from '@utils/useFetch'
import { elementOffsetY, encodeURI } from '@utils/helper'

import { HeaderSearchBoxResult } from './HeaderSearchBoxResult'
import { Loading } from '@components/Loading'

import { 
  HeaderSearchBoxResultPreviewContainer, 
  HeaderSearchBoxResultPreviewList,
  HeaderSearchBoxResultPreviewFooter,
  ViewAllResultsLinkContainer,
  LoadingContainer,
  TotalResults,
} from './styles'

export function HeaderSearchBoxResultPreview ({ query }) {
  const containerRef = useRef()
  const footerRef = useRef()

  query = encodeURIComponent(query)

  const { data, error } = useFetch(`/search?ref=header&q=${query}`)

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const y = elementOffsetY(containerRef.current)

    const elementMaxHeight = (window.innerHeight - y) - (150 + (footerRef.current && footerRef.offsetHeight || 0));
    // const elementMaxHeight2 = (window.document.body.offsetHeight - y) - (80 + (footerRef.current && footerRef.offsetHeight || 0));

    // console.log('elementMaxHeight => ', elementMaxHeight2, 'Y => ', y)

    containerRef.current.style.cssText = `max-height: ${elementMaxHeight}px;`;
  }, [data])

  const Error = () => (
    <HeaderSearchBoxResultPreviewContainer>
      <span>Error :(</span>
    </HeaderSearchBoxResultPreviewContainer>
  )

  if (error) {
    return <Error />
  }

  if (!data) {
    return (
      <HeaderSearchBoxResultPreviewContainer>
        <LoadingContainer>
          <Loading size={20} />
        </LoadingContainer>
      </HeaderSearchBoxResultPreviewContainer>
    )
  }

  const { results, total, next } = data

  if (!(results instanceof Array)) {
    return <Error />
  }

  return (
    <HeaderSearchBoxResultPreviewContainer>
      <HeaderSearchBoxResultPreviewList ref={containerRef}>
        {results.map(music => <HeaderSearchBoxResult key={music.id} {...music} />)}

        {results.length < 1 && (
          <span>No results</span>
        )}
      </HeaderSearchBoxResultPreviewList>
      {!!next && (
        <HeaderSearchBoxResultPreviewFooter ref={footerRef}>
          <TotalResults>
            Total results: {total}
          </TotalResults>
          <ViewAllResultsLinkContainer>
            <Link href={`/search/?next=${encodeURI(next)}`}>
              <a>
                <span>See more results</span>
              </a>
            </Link>
          </ViewAllResultsLinkContainer>
        </HeaderSearchBoxResultPreviewFooter>
      )}
    </HeaderSearchBoxResultPreviewContainer>
  )
}
