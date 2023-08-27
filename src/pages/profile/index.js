import Head from 'next/head'
import { SWRConfig } from "swr"

import { UserProfile } from '@components/UserProfile'

export default function ProfilePage ({ fallback, ...props }) {
  return (
    <SWRConfig fallback={ fallback }>
      <Head>
        <title>Agostinho Sambo Lopes - Sounya</title>
      </Head>
      <UserProfile {...props} />
    </SWRConfig>
  )
}

export async function getServerSideProps (context) {
  const query = context.query

  return {
    props: {
      fallback: {},
      query,

      myName: 'Agostinho Lopes'
    }
  }
}
