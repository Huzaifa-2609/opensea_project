import React from 'react'

const NFTCard = ({nftItem}) => {
  return (
    <div>
         {/* <img src={nftItem.image} alt="nft" /> */}
        <div class="card col-md-4" style="width: 18rem;">
        <img src={nftItem.image} class="card-img-top" alt="..."/>
        {/* <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
   </div> */}
       </div>
    </div>
  )
}

export default NFTCard