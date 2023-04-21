"use client";
import React from "react";
import Image from "next/image";
import Item1 from "../../public/assets/clothing/arms_01.jpg";

const Mint = () => {
  return (
    <div className="mt-12">
      <h1 className="text-center text-yellow-200">Mint</h1>
      <div className="flex justify-center my-12">
        <div className="card w-80 glass text-white">
          <figure>
            <Image src={Item1} alt="clothing" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">
              Mint your free HEX Gen 1
            </h2>
            <div className="px-2">
              <span>Price</span>
              <span className="float-right">0 ETH</span>
            </div>
            <div className="card-actions justify-end mt-6">
              <button className="bg-[#e7d17a] text-black px-5 py-2 hover:bg-red-600">
                Mint Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
