import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from "next/head"
import Script from 'next/script'
import "../styles/hero.css"
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

// import Vnavbar from '../components/Vnavbar'
const supportedChainIds=[4];
const connectors={
  injected:{},
}
function MyApp({ Component, pageProps }) {
  return( 
    <>
    <ThirdwebWeb3Provider>
    <Script src="https://kit.fontawesome.com/30bda3e318.js" crossorigin="anonymous"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></Script>
    {/* <Navbar title={"Cryfts"}/> */}
      
    {/* <Vnavbar title={"Cryfts"}/> */}
  <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  </>
  )
}

export default MyApp
