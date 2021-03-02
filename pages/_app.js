import Layout from '../components/Layout'
import '../styles/globals.css'

export default MyApp

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
