import styled, { keyframes } from 'styled-components'

const rotateSpinner = keyframes`
  0% {
    transform: rotate(0deg)
  }

  50% {
    transform: rotate(180deg)
  }

  100% {
    transform: rotate(360deg)
  }
`

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: block;
  font-size: ${props => !isNaN(props.size) ? parseFloat(props.size) : 14}px;
  text-align: center;

  svg {
    animation: .6s ${rotateSpinner} linear infinite;
  }
`
