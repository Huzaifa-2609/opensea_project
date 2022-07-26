import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { IoMdRefresh } from 'react-icons/io'
import {RiShareBoxLine} from "react-icons/ri"
import {FiMoreVertical} from "react-icons/fi"
const GeneralDetails = ({selectedNft}) => {
  return (
    <div className='d-flex justify-content-between'>
        <div >
        <div className="title text-primary">
            Bored Ape Yacht Club
        </div>
        <div className="titlename mt-5">
           <h2> {selectedNft?.name}</h2>
        </div>
        <div className="mt-5">
          Owned By&nbsp;<span className="text-primary me-2">huzaifa</span>
          <span>
            <AiFillHeart/>2.3k Favourites 
          </span>
        </div>
        </div>
        
        <div className="end-row gap-3 mx-3 mb-5" >
        <a className="mx-2"  href="#!" role="button"><IoMdRefresh style={{height:"1.5rem", width:"2rem"}}/></a>
        <a  className="mx-2" href="#!" role="button"><RiShareBoxLine style={{height:"1.5rem", width:"2rem"}}/></a>
        <a  className="mx-2" href="#!" role="button"><FiMoreVertical style={{height:"1.5rem", width:"2rem"}}/></a>
        </div>
        
    </div>
  )
}

export default GeneralDetails