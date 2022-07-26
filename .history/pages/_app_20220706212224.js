import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from "next/head"
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return( 
    <>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></Script>
    <Navbar/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp