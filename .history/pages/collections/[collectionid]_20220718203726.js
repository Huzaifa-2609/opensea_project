import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React , {useState, useEffect, useMemo}from 'react'
import NFTCard from '../../components/NFTCard';
import { client } from '../../lib/sanityClient';
import img from "../../public/bannerImage.jpg";
import {BsInstagram, BsTwitter} from "react-icons/bs"
import {IoMdMore} from "react-icons/io"
import {CgWebsite} from "react-icons/cg"
import {FaEthereum} from "react-icons/fa"
import Navbar from '../../components/Navbar';

const Collections = () => {
  const router=useRouter();
  const {provider}= useWeb3();
  const {collectionid}=router.query;
  const [collections, setCollections] = useState({});
  const [nfts, setNfts] = useState([]);
  const [listings, setListings] = useState([]);

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
    <Navbar title="Cryfts"/>
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
    <div className='info-container d-flex justify-content-between position-relative align-items-center flex-wrap ' style={{marginTop:"27%"}}>
      <div className="mx-4 d-flex flex-column justify-content-center  ">
        <img
        src={
          collections?.imageUrl?
          collections.imageUrl:
          "https://via.placeholder.com/200"
        }
        alt="banner"
        style={{height:"11.25rem",
        width:"11.25rem", borderRadius:"7px", position:"relative" }}

        />
      <div className="desc my-2">
        <div >
          <h2 className="">{collections?.title}</h2>
        </div>
        <div className=''>
           <b>By</b> {""}
          <span className='text-primary'>{collections?.creator}</span>
        </div>
        <div className="text-muted mt-3">
          <h5>{collections?.description}</h5>
        </div>
        </div>
      </div>

             <div className="end-row gap-3 mx-3 " >
        <a className="mx-2"  href="#!" role="button"><CgWebsite style={{height:"1.7rem", width:"2rem"}}/></a>
        <a  className="mx-2" href="#!" role="button"><BsTwitter style={{height:"1.7rem", width:"2rem"}}/></a>
        <a  className="mx-2" href="#!" role="button"><BsInstagram style={{height:"1.7rem", width:"2rem"}}/></a>
        <a  className="mx-2" href="#!" role="button"><IoMdMore style={{height:"1.7rem", width:"2rem"}}/></a>
      </div>
      </div>
      <ul class="list-group list-group-horizontal mt-4 fw-bold fs-5 text-center">
          <li class="list-group-item border-0">
          <span>
              <span className=''>{nfts.length}</span>
              <div className='text-muted'>Items</div>
            </span>
          </li>
          <li class="list-group-item  border-0">
          <span>
              <span>{collections?.allOwners?collections.allOwners.length:""}</span>
              <div className='text-muted '>Owners</div>
            </span>
          </li>
          <li class="list-group-item  border-0">
          <span>
              <span><FaEthereum/>{collections?.floorPrice}</span>
              <div className='text-muted'>Floor Price</div>
            </span>
          </li>
          <li class="list-group-item  border-0">
          <span>
              <span><FaEthereum/>{collections?.volumeTraded}k</span>
              <div className='text-muted'>Floor Price</div>
            </span>
          </li>
        </ul>
        <div className="container row m-5">
          <>
        {nfts.map((nftitem, id)=>(
         <NFTCard
        key={id}
        nftItem={nftitem}
        title={collections?.title}
        listings={listings}
        />
        ))}
        </>
        </div>
        </>
  )
}

export default Collections