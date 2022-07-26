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
            let a= await listings.find((marketNft)=>marketNft?.asset.id===selectedNft.id)
            console.log(listings[0]?.asset.id, "asset id")
            console.log(selectedNft.id, "nft id")
            console.log(a, "selected")
            setSelectedMarketNft(a );
            
        })()  
        
    }, [selectedNft, listings, isListed]);
    useEffect(() => {
        if(!selectedNft) return;
      if (!selectedMarketNft || !selectedNft) return;
      setEnableButton(true)
    }, [selectedMarketNft, selectedNft]);
    const confirmPurchase=(toastHandler=toast)=>{
        toastHandler.success("Purchase Successfull", {style:{background:"black", color:"white"}})
    }
    const buyItem= async(
        listingid,
        quantityDesired=1,
        module=marketPlaceModule
    )=>{
        await module.buyoutDirectListing({listingid:listingid, quantityDesired:quantityDesired})
        
        confirmPurchase()
    }
    return (
        <div className='container border p-3' style={{background:"#69696938", borderRadius:"8px"}}>
        <Toaster position='top-center' reverseOrder={false}/>
        <div className="d-flex gap-4 m-2">
        {isListed==="true"?(
            <>
            <button onClick={
                ()=>{
                    if(selectedMarketNft?.id==undefined )
                    {
                        console.log("dafa ho")
                    }
                    else{
                        console.log("clicked")
                        enableButton?buyItem(selectedMarketNft.id,1):null;
                    }
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