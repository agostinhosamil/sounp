import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #fbfbfb;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4 {
    margin: 0px;
    padding: 0px;
  }
`

export const MusicFeedContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 40px;
`

export const MusicFeedLine = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-content: center;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  height: auto;
`

export const Image = styled.div.attrs(props => {
  const style = {}

  if (typeof props.src === typeof 'str' && props.src) {
    style.backgroundImage = `url(${props.src || ''})`
  }

  return { style }
})`
  background-attachment: scroll;
  background-color: #ede0e0;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-repeat: no-repeat;
`
