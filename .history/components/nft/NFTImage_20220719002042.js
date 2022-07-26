import React from 'react'
import {IoMdSnow} from "react-icons/io"
import{AiOutlineHeart} from "react-icons/ai"
const NFTImage = ({selectedNft}) => {
  return (
    <div style={{marginTop:"70px"}}>

<div className="card mt-3" style={{"width": "22rem", borderRadius:"5px"}}>
<div className='d-flex justify-content-between py-2'>
            <IoMdSnow/> 
        <div>
            <span><AiOutlineHeart/></span>
             <span>23k</span>
        </div>
        </div>
  <img src={selectedNft?.image} className="card-img-top" alt="..."/>
</div>
    </div>
  )
}

export default NFTImage