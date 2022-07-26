import React, {useState, useEffect} from 'react'
import {BiHeart} from "react-icons/bi"
import Router from 'next/router'
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
       })}} className="card col-md-3 border-0 mx-2" style={{"width": "18rem"}}>
       <img src={nftItem.image} className="card-img-top" alt="nftimg"/>
       <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
    </div>
</>
  )
}

export default NFTCard