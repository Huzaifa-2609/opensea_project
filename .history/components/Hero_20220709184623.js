import React from "react";
import Image from "next/image";
import img from "../public/nftbg.jpg";

const Hero = () => {
  const style = {
    background: img,
    marginTop: "100px",
    height:"70vh"
  };
  return (
    <>
      <div className="container d-flex justify-content-between bg align-items-center " style={style}>
        <div className="card mb-3 border-0 bg-transparent" style={{ width: "26rem"}}>
          <div className="card-body">
            <h1 className="card-title fs-1">Discover, collect, and sell extraordinary NFTs</h1>
            <h3 className="card-subtitle text-muted mt-3">
            OpenSea is the world's first and largest NFT marketplace
            </h3>
          </div>
        </div>
        <div className="card mb-3 border-0 " style={{ width: "26rem"}}>
          <Image src={img} className="card-img-top" alt="..." />
          {/* <div className="card-body">
            <h1 className="card-title">Discover, collect, and sell extraordinary NFTs</h1>
            <h3 className="card-subtitle text-muted mt-3">
            OpenSea is the world's first and largest NFT marketplace
            </h3>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;