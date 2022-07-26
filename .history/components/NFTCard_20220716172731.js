import React, {useState, useEffect} from 'react'
import {BiHeart} from "react-icons/bi"
import Router from 'next/router'
import {FaEthereum} from "react-icons/fa"
const NFTCard = ({nftItem, title, listings}) => {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);
  useEffect(() => {
   for(const listing of listings){
    if (listing.asset.id===nftItem.id) {
      setIsListed(true);
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
      break;

    }
   }
  }, [nftItem, listings]);
  return (
    <>
    <div onClick={()=>{Router.push({
        pathname:`/assets/${nftItem.id}`,
        query:{isListed:isListed},
       })}} className="card col-md-4 border-0 mx-2" style={{"width": "18rem"}}>
       <img src={nftItem.image} className="card-img-top" alt="nftimg"/>
       <div class="card-body">
        <div className="d-flex justify-content-between">
        <div>
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{nftItem.name}</h6>
        </div>
        <div>
        {isListed&&
        <div>
        <div className="fw-bold m-auto">Price</div>
        <span className=''><FaEthereum/>{price}</span>
        </div>}
        </div>
        </div>
        <div className='mt-4 d-flex justify-content-center flex-column'>
          <BiHeart/>
          <span className='mx-1' style={{width:"inherit"}}>{nftItem.likes}1</span>
          </div>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a> */}
       </div>
    </div>
</>
  )
}

export default NFTCard