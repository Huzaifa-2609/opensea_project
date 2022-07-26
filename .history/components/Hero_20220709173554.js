import React from "react";
import Image from "next/image";
import img from "../public/nftbg.jpg";

const Hero = () => {
  const style = {
    backgroundImage: img,
    marginTop: "100px",
  };
  return (
    <>
      <div className="container" style={style}>
        <div className="card mb-3" style={{ width: "26rem", border: "none" }}>
          {/* <Image src={img} className="card-img-top opacity-25" alt="..."/> */}
          <div className="card-body">
            <h1 className="card-title fw-bold">Discover, collect, and sell extraordinary NFTs</h1>
            <h2 className="card-subtitle text-muted mt-3">
            OpenSea is the world's first and largest NFT marketplace
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;