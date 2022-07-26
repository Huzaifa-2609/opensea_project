import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { IoMdRefresh } from 'react-icons/io'
import {RiShareBoxLine} from "react-icons/ri"
import {FiMoreVertical} from "react-icons/fi"
const GeneralDetails = ({selectedNft}) => {
  return (
    <div>
        <div>
        <div className="title text-primary">
            Bored Ape Yacht Club
        </div>
        <div className="titlename mt-5">
           <h2> {selectedNft?.name}</h2>
        </div>
        <div className="ownedBy">
          Owned By <span className="text-primary ms-1">huzaifa</span>
        </div>
        </div>
    </div>
  )
}

export default GeneralDetails