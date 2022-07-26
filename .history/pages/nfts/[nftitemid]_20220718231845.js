import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React , {useState, useEffect, useMemo}from 'react'
import { client } from '../../lib/sanityClient';
import Router from 'next/router';

const Nft = () => {
  const {provider} = useWeb3();
  const [selectedNft, setSelectedNft] = useState([]);
  const [listings, setListings] = useState([]);
 const router= useRouter();
 const nftModule=useMemo(() => {
  if (!provider) return; 
  const sdk=new ThirdwebSDK(
    provider.getSigner(),
    "https://eth-rinkeby.alchemyapi.io/v2/jCGgEA0jg7gJTVX0vknMr8egiXZ2S4bL"

  )
  return sdk.getNFTModule("0x32F112B5e4047f2d2b47a89A05B8aBCF965D35d5");
}

, [provider])
useEffect(() => {
  if (!nftModule)return;
  ;(async()=>{
    const nfts=await nftModule.getAll();
    const selectedNftArray=nfts.filter(
      (nft)=>{nft.id===router.query.nftitemid}
    )
    setSelectedNft(selectedNftArray[0]);
  })()
 
}, [nftModule]);
  return (
    <div>
        <Navbar title="Cryfts"/>
    </div>
  )
}

export default Nft