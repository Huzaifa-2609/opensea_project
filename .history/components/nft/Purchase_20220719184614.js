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
    <div className='container' style={{background:"grey"}}>
        
    </div>
  )
}

export default Purchase