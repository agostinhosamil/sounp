import styled from 'styled-components'

export const PlayerButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 45px 0px;
  align-items: center;
`

export const PlayButton = styled.button.attrs({
  type: 'button'
})`
  width: 72px;
  height: 72px;
  background-color: #ff6366;
  border: 0px;
  outline: 0px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #c75154;
  }

  &:active {
    background-color: #a14143;
  }
`

export const DeezerPlayButton = styled.button.attrs({
  type: 'button'
})`
  font-size: 21px;
  color: #444444;
  font-size: 25px;
  border: 0px;
  border-radius: 30px;
  outline: 0px;
  padding: 6px 18px;
  cursor: pointer;
  border: 1px solid #888888;

  &:hover {
    color:  #ffffff;
    background-color: #444444;
  }

  @media (max-width: 540px) {
    font-size: 15px;
  }
`
