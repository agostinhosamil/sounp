import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Container } from './styles'

export function Loading (props) {
  return (
    <Container {...props}>
      <AiOutlineLoading3Quarters />
    </Container>
  )
}
