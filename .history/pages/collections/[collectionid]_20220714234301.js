import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React , {useState, useEffect, useMemo}from 'react'
import NFTCard from '../../components/NFTCard';
import { client } from '../../lib/sanityClient';
import img from "../../public/bannerImage.jpg";
import {BsInstagram} from "react-icons/bs"

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
    return sdk.getNFTModule(collectionid);
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
  const fetchCollectionData = async (sanityClient= client )=>{
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
    setCollections(collectionData[0])
    console.log(collectionData)
  }
  useEffect(() => {
    fetchCollectionData();
  
  }, [collectionid]);
  return (
    <>
    <div className='overflow-hidden'>
        <img
        src={
          collections?.bannerImageUrl?
          collections.bannerImageUrl:
          "https://via.placeholder.com/200"
        }
        
        alt="banner"
        layout='fill'
        style={{height:"70%",
        width:"100%", position:"absolute"}}
        />
    </div>
    <div className='info-container'>
      <div className='middle'>
        <img
        src={
          collections?.imageUrl?
          collections.imageUrl:
          "https://via.placeholder.com/200"
        }
        alt="banner"
        layout='fill'
        style={{height:"11.25rem",
        width:"11.25rem", position:"absolute", top:"60%", borderRadius:"5px", left:"5px" }}

        />
      </div>
      <div className="end-row position-absoolute" >
      <a style={{color: "#3b5998"}} href="#!" role="button"><i class="fab fa-facebook-f fa-lg"></i></a>
        {/* <a style="color: #55acee;" href="#!" role="button"><i class="fab fa-twitter fa-lg"></i></a>
        <a style="color: #dd4b39;" href="#!" role="button"><i class="fab fa-google fa-lg"></i></a>
        <a style="color: #ac2bac;" href="#!" role="button"><i class="fab fa-instagram fa-lg"></i></a> */}
      </div>
     {/* <BsInstagram/> */}
    </div>
        </>
  )
}

export default Collections