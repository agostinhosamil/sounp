import {
  UserProfileAlbumContainer,
  UserProfileAlbumBody,
  UserProfileAlbumCoverWrapper,
  UserProfileAlbumCover,
  UserProfileAlbumDataWrapper
} from './styles'

export function UserProfileAlbum ({ title, cover }) {
  return (
    <UserProfileAlbumContainer>
      <UserProfileAlbumBody>
        <UserProfileAlbumCoverWrapper>
          <UserProfileAlbumCover src={ cover } />
        </UserProfileAlbumCoverWrapper>
        <UserProfileAlbumDataWrapper>
          <strong>{ title }</strong>
        </UserProfileAlbumDataWrapper>
      </UserProfileAlbumBody>
    </UserProfileAlbumContainer>
  )
}
