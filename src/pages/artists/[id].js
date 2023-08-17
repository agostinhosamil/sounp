import { SWRConfig } from "swr"

function ArtistProfile () {
  return <h1>Artists</h1>
}

export default function ArtistProfilePage ({ fallback }) {
  return (
    <SWRConfig fallback={ fallback }>
      <ArtistProfile />
    </SWRConfig>
  )
}

export async function getServerSideProps () {
  return {
    props: {
      fallback: {},
    }
  }
}
