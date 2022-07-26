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
        <div className="mt-4">
          Owned By&nbsp;<span className="text-primary mx-2">huzaifa</span>
          <div className='mt-4'>
            <span className='me-2'><AiFillHeart/></span>2.3k Favourites 
          </div>
        </div>
        </div>
        {/* `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false` */}
        <div className="end-row gap-3 mx-3 mb-5" >
        <a className="mx-2"  href="#!" role="button"><IoMdRefresh style={{height:"1.5rem", width:"2rem"}}/></a>
        <a  className="mx-2" href="#!" role="button"><RiShareBoxLine style={{height:"1.5rem", width:"2rem"}}/></a>
        <a  className="mx-2" href="#!" role="button"><FiMoreVertical style={{height:"1.5rem", width:"2rem"}}/></a>
        </div>
        
    </div>
  )
}

export default GeneralDetails