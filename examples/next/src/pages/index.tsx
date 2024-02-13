import Head from 'next/head'
import { useRouter } from 'next/router'
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit'
import { RegistrationWidget } from '@pnsdomains/widgets'

export default function Home() {
  const { openConnectModal } = useConnectModal()

  const { query } = useRouter()

  const theme = query.mode === 'dark' ? 'dark' : 'light'
  const shadow = query.shadow === 'yes' ? true : false
  const referrer = query.referrer as string || undefined

  return (
    <>
      <Head>
        <title>PNS Registration Widget</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className="wrapper">
          <RegistrationWidget
            connectAction={openConnectModal}
            theme={theme}
            shadowless={!shadow}
            referrer={referrer}
          />
        </div>
      </main>
    </>
  )
}
