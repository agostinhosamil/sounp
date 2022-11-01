import 'react-loading-skeleton/dist/skeleton.css'

import { Fragment } from 'react'
import { Provider } from 'react-redux'

import { GlobalStyles } from '@styles'
import { Header } from '@components/Header'
import { HeaderCover } from '@components/HeaderCover'
import { AppWrapper } from '~/components/AppWrapper'
import { HeaderMenu, HeaderMenuItem } from '@components/HeaderMenu'

import store from '~/config/state/store'

import MoreMusicsImage from '../images/undraw_media_player_re.svg'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header>
        <HeaderMenu>
          <HeaderMenuItem 
            label="Home" 
            icon="SlHome" 
            />
          <HeaderMenuItem 
            label="About Me" 
            icon="SlUser" 
            href="/about"
            />
          <HeaderMenuItem 
            label="Contact" 
            href="/contact"
            icon="SlPhone" 
            />
        </HeaderMenu>
        <HeaderCover>
          <MoreMusicsImage />
        </HeaderCover>
      </Header>
      <Fragment>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </Fragment>
    </Provider>
  )
}

export default App
