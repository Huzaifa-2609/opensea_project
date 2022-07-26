import React from 'react'

const NFTCard = ({nftItem}) => {
  return (
    <>
      
       <div class="card col-md-4" style={{"width": "18rem"}}>
       <img src={nftItem.image} class="card-img-top" alt="nftimg"/>
       </div>
</>
  )
}

export default NFTCard