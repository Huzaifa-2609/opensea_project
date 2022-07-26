import React from "react";
import Image from "next/image";
import img from "../public/nftbg.jpg";

const Hero = () => {
  const style = {
    marginTop: "100px",
    height: "70vh",
    padding: "50px",
  };
  return (
    <>
      <div
        className=" d-flex justify-content-between bg align-items-center "
        style={style}
      >
        <div
          className="card mb-3 border-0 bg-transparent"
          style={{ width: "34rem" }}
        >
          <div className="card-body">
            <h1 className="card-title " style={{ fontSize: "45px" }}>
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <p className="card-subtitle text-muted mt-3 fs-3">
              OpenSea is the world's first and largest NFT marketplace
            </p>
          </div>
          <div className="d-flex gap-4 m-2">
          <button type="button" class="btn btn-primary bd-color bg-color btn1 btn-lg fs1 w-50 py-2  ">
            Explore
          </button>
          <button type="button" class="btn btn-light shadow-sm btn-lg text-color fs1 w-50 py-2 ">
            Create
          </button>
          </div>
        </div>
        <div className="card mb-3 border-0 " style={{ width: "34rem" }}>
          <Image
            src={img}
            className="card-img-top"
            alt="..."
            style={{ height: "34rem" }}
          />
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
