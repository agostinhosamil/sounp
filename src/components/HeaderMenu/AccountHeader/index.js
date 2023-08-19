import { 
  AccountHeaderContainer,
  AccountHeaderWrapper,
  AccountPhotoWrapper,
  AccountPhoto,
  AccountData
} from './styles'

export function AccountHeader () {
  return (
    <AccountHeaderContainer>
      <AccountHeaderWrapper>
        <AccountPhotoWrapper>
          <AccountPhoto src="https://e-cdns-images.dzcdn.net/images/artist/ed15b84067164aa25701fdd30cc34d33/500x500-000000-80-0-0.jpg" />
        </AccountPhotoWrapper>
        <AccountData>
          <strong>Agostinho Sambo Lopes</strong>
          <span>@agostinho.sambo.lopes</span>
        </AccountData>
      </AccountHeaderWrapper>
    </AccountHeaderContainer>
  )
}
