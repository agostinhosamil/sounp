import { useState, useContext, useRef } from 'react'
import { useDispatch } from 'react-redux'
import * as Icon from 'react-icons/sl'
import Link from 'next/link'

import AppContext from '@config/state/context'
import { unsetPlayingMusic } from '@reducers/playingMusic'

import { 
  Container, 
  Header,
  HeaderButtons,
  Main,
  PictureContainer,
  Picture,
  DataContainer,
  Title,
  SubTitle,
  PlayButtonContainer,
  PlayButton
} from './styles.js'

import { HeaderButton } from './HeaderButton'

export const PlayingMusicPopup = ({ title, id, context, ...music }) => {
  const { setSelectedMusicContext } = useContext(AppContext)
  const [showHeader, setShowHeader] = useState(false)
  const [playing, setPlaying] = useState(context?.isPlaying())
  const musicLinkRef = useRef()

  const dispatch = useDispatch()

  const containerMouseOverHandler = () => {
    setShowHeader(true)
  }

  const containerMouseLeaveHandler = () => {
    setShowHeader(false)
  }

  const popupCloseHandler = () => {
    dispatch(unsetPlayingMusic())
    setSelectedMusicContext(null)

    context?.destroy()
  }

  const handlePlayPause = () => {
    setPlaying(!playing)

    context?.playPause()
  }

  const PlayButtonIcon = Icon[playing ? 'SlControlPause' : 'SlControlPlay']

  return (
    <Container 
      onMouseOver={containerMouseOverHandler}
      onMouseLeave={containerMouseLeaveHandler}>
      {showHeader && (
        <Header onClick={() => null}>
          <HeaderButtons>
            <HeaderButton 
              icon="SlArrowDown"
              onClick={() => console.log('Minimize Popup')}
              />
            <HeaderButton 
              icon="SlClose"
              onClick={popupCloseHandler}
              />
          </HeaderButtons>
        </Header>
      )}
      <Main>
        <PictureContainer>
          <PlayButtonContainer>
            <PlayButton onClick={handlePlayPause}>
              <PlayButtonIcon />
            </PlayButton>
          </PlayButtonContainer>
          <Picture src={music.artist?.picture_small} />
        </PictureContainer>
        <DataContainer>
          <Link href={['/musics', id].join('/')}>
            <a ref={musicLinkRef}>
              <Title title={title}>
                {title}
              </Title>
              <SubTitle title={music.artist.name}>
                {music.artist.name}
              </SubTitle>
            </a>
          </Link>
        </DataContainer>
      </Main>
    </Container>
  )
}
