import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React , {useState, useEffect, useMemo}from 'react'
import { client } from '../../lib/sanityClient';
import Router from 'next/router';
import NFTImage from '../../components/nft/NFTImage';
import Navbar from '../../components/Navbar';
import GeneralDetails from '../../components/nft/GeneralDetails';
import ItemActivity from '../../components/nft/ItemActivity';
import Purchase from '../../components/nft/Purchase';

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
  return sdk.getNFTModule("0x7132e1d414161A232c2027aE6C66D7914649bA66");
}

, [provider])
useEffect(() => {
  if (!nftModule)return;
  ;(async()=>{
    const nfts=await nftModule.getAll();
    // console.log(nfts)
    const selectedNftitem=nfts.find(
      (nft)=>nft.id==router.query.nftitemid
    )
    setSelectedNft(selectedNftitem);
    console.log(selectedNftitem)
  })()
 
}, [nftModule]);
const marketPlaceModule= useMemo(() => {
  if(!provider) return
  const sdk = new ThirdwebSDK(
    provider.getSigner(),
    "https://eth-rinkeby.alchemyapi.io/v2/jCGgEA0jg7gJTVX0vknMr8egiXZ2S4bL"
    )
  return sdk.getMarketplaceModule(
    "0x12F81777a8f876899D10934E5020081458085116"
  )
}, [provider])
useEffect(() => {
  if (!marketPlaceModule) return;
  ;(async()=>{
    const list=await marketPlaceModule.getAllListings();
    setListings(list);
  })()
  
}, [marketPlaceModule]); 
  return (
    <div>
        <Navbar title="Cryft"/>
        <div className="d-flex mx-4 gap-4" style={{marginTop:"100px"}}>
        <div className="">
        <NFTImage  selectedNft={selectedNft}/>
        </div>
        <div className="d-flex">
        <div className="container">
          <GeneralDetails selectedNft={selectedNft}/>
        </div>
        <div className='container'>
          <Purchase
          isListed={router.query.isListed}
          selectedNft={selectedNft}
          listings={listings}
          marketPlaceModule={marketPlaceModule}
          />
          </div>
        </div>
          </div>
        <div className=" m-5 p-3">
        <ItemActivity/>
        </div>
    </div>
  )
}

export default Nft