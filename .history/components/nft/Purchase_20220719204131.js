import React from 'react'
import { useEffect, useState } from 'react'
import {HiTag} from "react-icons/hi"
import { IoMdWallet } from 'react-icons/io'
import toast, {toaster} from "react-hot-toast"

const Purchase = ({isListed, MarketPlaceModule, listings, selectedNft}) => {
    const [selectedMarketNft, setSelectedMarketNft] = useState();
    const [enableButton, setEnableButton] = useState(false);
    useEffect(() => {
    if(!listings|| isListed==="false") return  ;
    (async()=>{
        setSelectedMarketNft(
            listings.find(marketNft=>marketNft.asset?.id===selectedNft.id)
        )
    })()  
    
    }, [selectedNft, listings, isListed]);
    useEffect(() => {
      if (!selectedMarketNft || !selectedNft) return;
      setEnableButton(true)
    }, [selectedMarketNft, selectedNft]);
    const confirmPurchase=(toastHandler=toast)=>{
        toastHandler.success("Purchase Successfull", {style:{background:"black", color:"white"}})
    }
    const buyItem= async(
        listingid=selectedMarketNft.id,
        quantityDesired=1,
        module=MarketPlaceModule
    )=>{
        await module.buyOutDirectListing({listingid, quantityDesired})
        confirmPurchase()
    }
  return (
    <div className='container border p-5' style={{background:"#69696938", borderRadius:"8px"}}>
        {isListed?(
        <div className="d-flex gap-4">
            <button  className="btn btn1 bg-color text-light gap-2 bd-color btn-lg">
                <span><IoMdWallet/></span>
                <span className='ms-2'>
                Buy now
                </span>
            </button>
            <button  className="btn btn-secondary text-light  btn-lg">
                <span><IoMdWallet/></span>
                <span className='ms-2'>
                Buy now
                </span>
            </button>
        </div>
        ):
        huzaifa
        }
    </div>
  )
}

export default Purchase