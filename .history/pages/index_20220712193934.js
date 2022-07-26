import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import { useWeb3 } from '@3rdweb/hooks'

export default function Home() {
  const {address, connectWallet}= useWeb3();
  return (
    
    <>
    {/* <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         </div> */}
         
      <Hero/>
      </>
  )
}
