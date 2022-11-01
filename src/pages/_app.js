import 'react-loading-skeleton/dist/skeleton.css'
import 'nprogress/nprogress.css'

import { Fragment } from 'react'
import { Provider } from 'react-redux'
import Router from 'next/router'
import nProgress from 'nprogress'

import { GlobalStyles } from '@styles'
import { Header } from '@components/Header'
import { HeaderCover } from '@components/HeaderCover'
import { AppWrapper } from '~/components/AppWrapper'
import { HeaderMenu } from '@components/HeaderMenu'
import { HeaderMenuItem } from '@components/HeaderMenu/HeaderMenuItem'

import store from '~/config/state/store'

import MoreMusicsImage from '../images/undraw_media_player_re.svg'

Router.events.on('routeChangeStart', () => nProgress.start()); 
Router.events.on('routeChangeComplete', () => nProgress.done()); 
Router.events.on('routeChangeError', () => nProgress.done());

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
