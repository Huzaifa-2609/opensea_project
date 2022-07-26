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
    <div className='container border p-3' style={{background:"#69696938", borderRadius:"8px"}}>
        <div className="d-flex gap-4 mt-2">
        {isListed==="true"?(
            <>
            <button onClick={()=>{enableButton?buyItem(selectedMarketNft.id,1):null}}  className="btn btn1 bg-color text-light gap-2 bd-color btn-lg px-5">
                <span><IoMdWallet/></span>
                <span className='ms-2'>
                Buy now
                </span>
            </button>
            <button  className="btn btn-secondary text-light btn-lg px-5">
                <span><IoMdWallet/></span>
                <span className='ms-2'>
                Buy now
                </span>
            </button>
            </>
        ):
        <>
        <button  className="btn btn1 bg-color text-light gap-2 bd-color btn-lg px-5">
        <span><HiTag/></span>
        <span className='ms-2'>
        Mint
        </span>
    </button>
        </>
        }
        </div>
    </div>
  )
}

export default Purchase