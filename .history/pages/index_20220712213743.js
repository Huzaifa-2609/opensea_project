import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import { useWeb3 } from '@3rdweb/hooks'

export default function Home() {
  const {address, connectWallet}= useWeb3();
  return (
    <>
    {address ?
      <>
      <Hero/>
      </>:(
        <button onClick={()=>{connectWallet("injected")}} className="btn btn1 bd-color bg-color btn-primary">Connect Wallet</button>
      )
    }
    </>
  )
}
