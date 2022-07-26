import React from 'react'
import {IoMdSnow} from "react-icons/io"
import{AiOutlineHeart} from "react-icons/ai"
const NFTImage = ({selectedNft}) => {
  return (
    <div style={{marginTop:"70px"}}>
        <div className='d-flex justify-content-between shadow-sm m-4 py-2'>
            <IoMdSnow/> 
        <div>
            <span><AiOutlineHeart/></span>
             <span>23k</span>
        </div>
        </div>
        <div className="imagecontainer m-3">
       <img src={selectedNft?.image} alt="huzaifa" /> 
        </div>
    </div>
  )
}

export default NFTImage