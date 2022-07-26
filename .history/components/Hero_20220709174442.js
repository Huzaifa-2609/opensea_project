import React from "react";
import Image from "next/image";
import img from "../public/nftbg.jpg";

const Hero = () => {
  const style = {
    background: img,
    marginTop: "100px",
  };
  return (
    <>
      <div className="container d-flex " style={style}>
        <div className="card mb-3 border-0 " style={{ width: "26rem"}}>
          {/* <Image src={img} className="card-img-top opacity-25" alt="..."/> */}
          <div className="card-body">
            <h1 className="card-title">Discover, collect, and sell extraordinary NFTs</h1>
            <h3 className="card-subtitle text-muted mt-3">
            OpenSea is the world's first and largest NFT marketplace
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
