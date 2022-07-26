import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React , {useState, useEffect, useMemo}from 'react'
import { client } from '../../lib/sanityClient';
import Router from 'next/router';

const Nft = () => {
  return (
    <div>
        <Navbar title="Cryfts"/>
    </div>
  )
}

export default Nft