import Link from 'next/link'

import { 
  HeaderSearchBoxResultContainer,
  HeaderSearchBoxResultSubTitle,
  HeaderSearchBoxResultThumb,
  HeaderSearchBoxResultThumbContainer,
  HeaderSearchBoxResultTitle
} from './styles'

export function HeaderSearchBoxResult ({ id, title, artist, album }) {
  return (
    <HeaderSearchBoxResultContainer>
      <Link href={`/musics/${id}`}>
        <a>
          <HeaderSearchBoxResultThumbContainer>
            <HeaderSearchBoxResultThumb src={ album?.cover_small } />
          </HeaderSearchBoxResultThumbContainer>
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
