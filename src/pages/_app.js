import 'react-loading-skeleton/dist/skeleton.css'
import 'nprogress/nprogress.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Fragment } from 'react'
import { Provider } from 'react-redux'
import Router from 'next/router'
import nProgress from 'nprogress'

import { GlobalStyles } from '@styles'
import { Header } from '@components/Header'
import { HeaderCover } from '@components/HeaderCover'
import { AppWrapper } from '~/components/AppWrapper'
import { HeaderMenu } from '@components/HeaderMenu'
import { HeaderCoverImage } from '@components/HeaderCoverImage'
import { HeaderMenuItem } from '@components/HeaderMenu/HeaderMenuItem'
import { HeaderMenuItemWrapper } from '@components/HeaderMenu/HeaderMenuItemWrapper'

import store from '~/config/state/store'

Router.events.on('routeChangeStart', () => nProgress.start()); 
Router.events.on('routeChangeComplete', () => nProgress.done()); 
Router.events.on('routeChangeError', () => nProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header>
        <HeaderMenu>
          <HeaderMenuItem label="Home" icon="SlHome" href="/" />
          <HeaderMenuItem label="Me" icon="SlUser" href="/profile" />
          <HeaderMenuItem label="Post" icon="SlNote" href="/post" />
          <HeaderMenuItemWrapper label="Menu" icon="SlMenu">
            <HeaderMenuItem label="Item 1" href="/post" icon="SlNote" />
            <HeaderMenuItem label="Item 2" href="/post" icon="SlNote" />
            <HeaderMenuItem label="Item 3" href="/post" icon="SlNote" />
            <HeaderMenuItem label="Item 5" href="/post" icon="SlNote" />
            <HeaderMenuItem label="Item dss 6" href="/post" icon="SlNote" />
          </HeaderMenuItemWrapper>
        </HeaderMenu>
        <HeaderCover>
          <HeaderCoverImage />
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
