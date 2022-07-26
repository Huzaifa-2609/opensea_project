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
        <div className="imagecontainer mx-3">
       <img src={selectedNft?.image} alt="huzaifa" /> 
        </div>




<div className="card" style={{"width": "18rem"}}>
<div className='d-flex justify-content-between m-4 py-2'>
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