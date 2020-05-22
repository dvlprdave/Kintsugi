import '../styles/styles.css'
import SiteLayout from './../components/Layout/SiteLayout'

export default function MyApp({ Component, pageProps, router }) {

  if (router.pathname === '/anime/[id]') return <Component {...pageProps} />

  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}
