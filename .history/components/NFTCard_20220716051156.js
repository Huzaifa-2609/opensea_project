import React from 'react'

const NFTCard = ({nftItem}) => {
  return (
    <>
      
       {/* <img  alt="nft" /> */}
       <div class="card col-md-4" style={{"width": "fit-content"}}>
       <img src={nftItem.image} class="card-img-top" alt="nftimg"/>
       </div>
</>
  )
}

export default NFTCard