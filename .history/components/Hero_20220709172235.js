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
      <div className="card mb-3" style={{width:"22rem"}}>
  <Image src={img} className="card-img-top opacity-25" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">Card title</h2>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
    </div>

    </>
  )
}

export default Hero