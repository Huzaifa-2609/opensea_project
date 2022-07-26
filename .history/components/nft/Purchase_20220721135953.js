import React from 'react'
import { useEffect, useState } from 'react'
import {HiTag} from "react-icons/hi"
import { IoMdWallet } from 'react-icons/io'
import toast, {Toaster} from "react-hot-toast"

const Purchase = ({isListed, marketPlaceModule, listings, selectedNft}) => {
    const [selectedMarketNft, setSelectedMarketNft] = useState();
    const [enableButton, setEnableButton] = useState(false);
    useEffect(() => {
    if(!listings|| isListed==="false") return 
    ;(async()=>{
        let a=listings.find((marketNft)=>marketNft.asset?.id===selectedNft.id)
        setSelectedMarketNft(a);
          
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
        listingid=selectedMarketNft?.id,
        quantityDesired=1,
        module=marketPlaceModule
    )=>{
        console.log(module)
        await module.buyoutDirectListing({listingid:listingid, quantityDesired:quantityDesired})
        confirmPurchase()
    }
    buyItem();
  return (
    <div className='container border p-3' style={{background:"#69696938", borderRadius:"8px"}}>
        <Toaster position='top-center' reverseOrder={false}/>
        <div className="d-flex gap-4 m-2">
        {isListed==="true"?(
            <>
            <button onClick={
                ()=>{
                    enableButton?buyItem(selectedMarketNft.id,1):null;
                    console.log("clicked")
                }
                }  
                className="btn btn1 bg-color text-light gap-2 bd-color btn-lg px-5">
                <span><IoMdWallet/></span>
                <span className='ms-2'>
                Buy now
                </span>
            </button>
            <button  className="btn btn-secondary text-light btn-lg px-5">
                <span><HiTag/></span>
                <span className='ms-2'>
                Make Offer
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