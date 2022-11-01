import { Container, UndrawOffRoadReLemeContainer } from './styles'

import UndrawOffRoadReLeme from '../../images/undraw_off_road_re_leme.svg'

export function HeaderCover ({ children }) {
  return (
    <Container>
      <div>
        {children}
      </div>
      <div>
        <UndrawOffRoadReLemeContainer>
          <UndrawOffRoadReLeme className="offRoadLeme" />
        </UndrawOffRoadReLemeContainer>
        <strong>Music query made easy :)</strong>
        <h1>
          Play the hottest and funny songs from deezer!
        </h1>
      </div>
    </Container>
  )
}
