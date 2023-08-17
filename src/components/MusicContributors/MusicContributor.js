import Link from 'next/link'

import {
  MusicContributorContainer,
  MusicContributorPictureContainer,
  MusicContributorPicture,
  MusicContributorData
} from './styles'

export function MusicContributor ({ name, id, picture_medium }) {

  return (
    <Link href={`/artists/${ id }/`}>
      <a>
        <MusicContributorContainer>
          <MusicContributorPictureContainer>
            <MusicContributorPicture 
              src={picture_medium}
              />
          </MusicContributorPictureContainer>
          <MusicContributorData>
            <span>{name}</span>
          </MusicContributorData>
        </MusicContributorContainer>
      </a>
    </Link>
  )
}
