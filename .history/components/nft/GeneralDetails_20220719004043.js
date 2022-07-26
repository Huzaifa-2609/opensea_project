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
        <div className="titlename">
           <h3> {selectedNft?.name}</h3>
        </div>
        </div>
    </div>
  )
}

export default GeneralDetails