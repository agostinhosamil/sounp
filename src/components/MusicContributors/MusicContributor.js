import {
  MusicContributorContainer,
  MusicContributorPictureContainer,
  MusicContributorPicture,
  MusicContributorData
} from './styles'

export function MusicContributor ({ name, id, picture_medium }) {

  return (
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
  )
}
