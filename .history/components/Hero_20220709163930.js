import React from 'react'
import Image from "next/image";
import img from '../public/nftbg.jpg'

const Hero = () => {
  const style={
    backgroundImage:img,
    marginTop:"55px"
  }
  return (
        <>
      <div className='container' style={style}>
      <div class="card mb-3">
  <Image src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">Card title</h2>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
    </div>

    </>
  )
}

export default Hero