import React from 'react'

const NFTCard = ({nftItem}) => {
  return (
    <>
      
       {/* <img  alt="nft" /> */}
       <div class="card" style="width: 18rem;">
       <img src={nftItem.image} class="card-img-top" alt="nftimg"/>
       </div>
</>
  )
}

export default NFTCard