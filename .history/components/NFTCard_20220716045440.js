import React from 'react'

const NFTCard = ({nftItem}) => {
  return (
    <>
         {/* <img src={nftItem.image} alt="nft" /> */}
        <div className="card col-md-4" style="width: 18rem;">
        <img src={nftItem.image} className="card-img-top" alt="..."/>
     
       </div>
    </>
  )
}

export default NFTCard