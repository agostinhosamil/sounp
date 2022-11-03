import { Fragment } from 'react'

import { MusicContributor } from './MusicContributor'

import { Container, Title } from './styles'

export function MusicContributors ({ contributors }) {
  
  if (!(contributors instanceof Array && contributors)) {
    return <Fragment />
  }

  const contributorsIds = []

  const contributorsListFilter = contributor => {
    if (contributorsIds.indexOf(contributor.id) < 0) {
      contributorsIds.push(contributor.id)

      return true
    }

    return false
  }

  return (
    <Container>
      <Title>Contributors</Title>
      {contributors.filter(contributorsListFilter).map(contributor => (
        <MusicContributor key={contributor.id} {...contributor} />
      ))}
    </Container>
  )
}
