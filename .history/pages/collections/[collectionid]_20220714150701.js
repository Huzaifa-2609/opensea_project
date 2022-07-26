import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useRouter } from 'next/router'
import React , {useState, useEffect, useMemo}from 'react'
import { client } from '../../lib/sanityClient';

const Collections = () => {
  const router=useRouter();
  const {provider}= useWeb3();
  const {collectionid}=router.query;
  const [collections, setCollections] = useState({});
  const [nfts, setNfts] = useState({});
  const [listings, setListings] = useState({});
  const nftModule=useMemo(() => {
    if (!provider) return; 
    const sdk=new ThirdwebSDK(
      provider.getSigner(),
      "https://eth-rinkeby.alchemyapi.io/v2/jCGgEA0jg7gJTVX0vknMr8egiXZ2S4bL"

    )
    return sdk.getNFTCollection(collectionid);
  }
  , [provider])
  useEffect(() => {
    if (!nftModule)return;
    ;(async()=>{
      const nfts=await nftModule.getAll();
      setNfts(nfts);
    })()
   
  }, [nftModule]);
  const marketPlaceModule= useMemo(() => {
    if(!provider) return
    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      "https://eth-rinkeby.alchemyapi.io/v2/jCGgEA0jg7gJTVX0vknMr8egiXZ2S4bL"
    )
    return sdk.getMarketplace(
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
  const fetchCollectionData = async (sanityClient= client, collectionid= collectionid )=>{
    const query =   `*[_type=="marketItems" && contractAddress=="${collectionid}" ] {
      "imageUrl":profileImage.asset->url,
      "bannerImageUrl":bannerImage.asset->url,
      volumeTraded,
      contractAddress,
      "creator":createdBy->userName,
      title, floorPrice, 
      "allOwners": owners[]->,
    description
    }`
    const collectionData= await sanityClient.fetch(query);
    console.log(collectionData)
     setCollections(collectionData[0])
  }
  useEffect(() => {
    fetchCollectionData();
  
  }, [collectionid]);
  return (
    <div>
        {collectionid}
    </div>
  )
}

export default Collections