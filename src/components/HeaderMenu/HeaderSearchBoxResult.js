import Link from 'next/link'

import { 
  HeaderSearchBoxResultContainer,
  HeaderSearchBoxResultSubTitle,
  HeaderSearchBoxResultThumb,
  HeaderSearchBoxResultTitle
} from './styles'

export function HeaderSearchBoxResult ({ id, title, artist, album }) {
  return (
    <HeaderSearchBoxResultContainer>
      <Link href={`/musics/${id}`}>
        <a>
          <HeaderSearchBoxResultThumb src={ album?.cover_small } />
          <HeaderSearchBoxResultTitle>
            { title }
          </HeaderSearchBoxResultTitle>
          <HeaderSearchBoxResultSubTitle>
            { artist?.name }
          </HeaderSearchBoxResultSubTitle>
        </a>
      </Link>
    </HeaderSearchBoxResultContainer>
  )
}
