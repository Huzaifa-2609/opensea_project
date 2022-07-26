import React from 'react'

const NFTCard = ({nftItem}) => {
  return (
    <>
       <div className="card col-md-3 border-0" style={{"width": "18rem"}}>
       <img src={nftItem.image} className="card-img-top" alt="nftimg"/>
       </div>
</>
  )
}

export default NFTCard