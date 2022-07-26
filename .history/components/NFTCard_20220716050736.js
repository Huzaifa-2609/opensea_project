import React from 'react'

const NFTCard = ({nftItem}) => {
  return (
    <div>
      
       <img src={nftItem.image} alt="nft" />
    </div>
  )
}

export default NFTCard