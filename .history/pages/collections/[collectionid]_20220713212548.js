import { useWeb3 } from '@3rdweb/hooks';
import { useRouter } from 'next/router'
import React from 'react'

const Collections = () => {
  const router=useRouter();
  const {provider}= useWeb3();
  const {collectionid}=router.query;

  return (
    <div>
        {collectionid}
    </div>
  )
}

export default Collections