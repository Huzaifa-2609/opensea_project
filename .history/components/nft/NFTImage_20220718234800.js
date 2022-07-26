import React from 'react'
import {IoMdSnow} from "react-icons/io"
import{AiOutlineHeart} from "react-icons/ai"
const NFTImage = ({selectedNft}) => {
  return (
    <div style={{marginTop:"70px"}}>
        <div className='d-flex'>
            <IoMdSnow/> 
        <div>
            <AiOutlineHeart/> <span>23k</span>
        </div>
        </div>
        <div className="imagecontainer">
        {selectedNft?.image}
        </div>
    </div>
  )
}

export default NFTImage