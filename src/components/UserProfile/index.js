import { UserProfileActionDropDownItem } from './UserProfileActionDropDownItem'
import { UserProfileAlbumsListWrapper } from './UserProfileAlbumsListWrapper'
import { UserProfileAction } from './UserProfileAction'
import { UserProfileAlbum } from './UserProfileAlbum'

import {
  UserProfileContainer,
  UserProfileAsideContent,
  UserProfileMainContent,
  UserProfileCoverPhotoWrapper,
  UserProfileActionsWrapper,
  UserProfileAlbumsWrapper,
  UserProfileCoverPhoto,
  UserProfileAvatar,
  UserProfileAlbumsList,
  UserProfileDataWrapper
} from './styles'

export function UserProfile () {
  return (
    <UserProfileContainer>
      <UserProfileMainContent>
        <UserProfileCoverPhotoWrapper>
          <UserProfileCoverPhoto src="https://e-cdns-images.dzcdn.net/images/cover/2121422ee4c76b74026f5feff445fcf0/250x250-000000-80-0-0.jpg" />
          <UserProfileAvatar src="https://e-cdns-images.dzcdn.net/images/artist/3cc72407fd8c6141257a8e3ac8a73d5a/250x250-000000-80-0-0.jpg" />
        </UserProfileCoverPhotoWrapper>
        <UserProfileDataWrapper>
          <h1>Agostinho Sambo Lopes</h1>
          <span>@agostinho.sambo.lopes</span>
          <p>
            A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.
          </p>
        </UserProfileDataWrapper>
        <UserProfileActionsWrapper>
          <UserProfileAction colored icon="SlEnvelopeOpen" label="Message" />
          <UserProfileAction icon="SlUserFollow" />
          <UserProfileAction icon="SlTag" />
          <UserProfileAction icon="SlOptionsVertical">
            <UserProfileActionDropDownItem label="Add friend" icon="SlPeople" />
            <UserProfileActionDropDownItem label="Add friend" icon="SlPresent" />
            <UserProfileActionDropDownItem label="Add friend" icon="SlPeople" />
            <UserProfileActionDropDownItem label="Send a DM to this user by email" icon="SlPeople" />
            <UserProfileActionDropDownItem label="Add friend" icon="SlPeople" />
            <UserProfileActionDropDownItem label="Add friend" icon="SlPeople" />
            <hr />
            <UserProfileActionDropDownItem label="Add friend" icon="SlPeople" />
            <UserProfileActionDropDownItem label="Settings" icon="SlPeople">
              <UserProfileActionDropDownItem label="Settings 1" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings 2" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings 3" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings 4" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings 5" icon="SlPeople">
                <UserProfileActionDropDownItem label="Ir para a página incial" icon="SlHome" />
              </UserProfileActionDropDownItem>
              <UserProfileActionDropDownItem label="Settings 6" icon="SlPeople" />
            </UserProfileActionDropDownItem>
            <UserProfileActionDropDownItem label="Some other options" icon="SlPeople">
              <UserProfileActionDropDownItem label="Settings options 1" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings options 2" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings options 3" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings options 4" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings options 5" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings options 6" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings options 7" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings options 8" icon="SlPeople" />
              <UserProfileActionDropDownItem label="Settings options 9" icon="SlPeople" />
            </UserProfileActionDropDownItem>
          </UserProfileAction>
        </UserProfileActionsWrapper>
        <UserProfileAlbumsWrapper>
          <h2>Albums from <br /> Agostinho Sambo Lopes</h2>
          <UserProfileAlbumsList>
            <UserProfileAlbumsListWrapper>
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
              <UserProfileAlbum title="Some great album name should be here" cover="https://e-cdns-images.dzcdn.net/images/cover/305b06b02f21849dd2bf45614e0fafef/250x250-000000-80-0-0.jpg" />
            </UserProfileAlbumsListWrapper>
          </UserProfileAlbumsList>
        </UserProfileAlbumsWrapper>
      </UserProfileMainContent>
      <UserProfileAsideContent>
        Aside
      </UserProfileAsideContent>
    </UserProfileContainer>
  )
}
