import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
export default function Home() {
  const {address, connectWallet}= useWeb3();
  useEffect(() => {
    if (!address)return; 
    ;(async() => {
      const userDoc={
        _type:"users",
        _id:address,
        userName:'Unnamed',
        walletAddress:address,
      }
      const result= await client.createIfNotExists(userDoc);
    })();
  }, [address]);
  return (
    <>
    {address ?
      <>
      <Hero/>
      </>:(
        <button onClick={()=>{connectWallet('injected')}} className="btn btn1 bd-color bg-color btn-primary">Connect Wallet</button>
      )
    }
    </>
  )
}
