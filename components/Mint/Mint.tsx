"use client";
import React from "react";
import Image from "next/image";
import Item1 from "../../public/assets/clothing/arms_01.jpg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
const erc721ABI = require("../ABI/erc721abi.json");

const Mint = () => {
  const { config, error } = usePrepareContractWrite({
    address: "0x91ea7B342176B0721f2B865924DC2fBf924F3acb",
    abi: erc721ABI,
    functionName: "mint",
    args: [1],
  });
  const { write } = useContractWrite(config);

  return (
    <div className="mt-12">
      <h1 className="text-center text-yellow-200">Mint</h1>
      <div className="flex justify-center items-start">
        <p className="w-5/6 text-center text-white pb-4 tracking-wider leading-5">
          Discover the captivating &quot;Hex Gen 1 Bags&quot; NFT collection, a
          one-of-a-kind series featuring 111 ingeniously designed digital bags,
          available for free minting. Each Hex Gen 1 Bag is an artistic fusion
          of cutting-edge style and futuristic design elements, resulting in a
          truly unique and desirable digital accessory. Delve into the realm of
          avant-garde fashion and claim your distinctive piece from this
          groundbreaking collection. Seize this unparalleled chance to enrich
          your digital collection with the innovative &quot;Hex Gen 1 Bags&quot;
          NFT – start minting your favorites now!
        </p>
      </div>

      <div className="flex justify-center items-center">
        <ConnectButton />
      </div>

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
              <button
                className="bg-[#e7d17a] text-black px-5 py-2 hover:bg-red-600"
                disabled={!write}
                onClick={() => write?.()}
              >
                Mint Now!
              </button>
              {error && (
                <div>
                  An error occurred preparing the transaction: {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
