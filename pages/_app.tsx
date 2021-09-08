import 'normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main><Component {...pageProps} /></main>
    </Layout>
  )
}
export default MyApp
