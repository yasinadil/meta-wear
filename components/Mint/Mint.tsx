"use client";
import React from "react";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Carousel from "./Carousel";
import { ToastContainer, toast } from "react-toastify";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";

import "react-toastify/dist/ReactToastify.css";
const erc721ABI = require("../ABI/erc721abi.json");

const contractAddress = "0x91ea7B342176B0721f2B865924DC2fBf924F3acb";

const Mint = () => {
  // if (error) {
  // toast.error("🦄 Wow so easy!", {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  // });
  // }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="mt-12">
        <h1 className="text-center text-yellow-200">Mint</h1>
        <div className="flex justify-center items-start">
          <p className="w-5/6 text-center text-white pb-4 tracking-wider leading-5">
            Discover the captivating &quot;Hex Gen 1 Bags&quot; NFT collection,
            a one-of-a-kind series featuring 111 ingeniously designed digital
            bags, available for free minting. Each Hex Gen 1 Bag is an artistic
            fusion of cutting-edge style and futuristic design elements,
            resulting in a truly unique and desirable digital accessory. Delve
            into the realm of avant-garde fashion and claim your distinctive
            piece from this groundbreaking collection. Seize this unparalleled
            chance to enrich your digital collection with the innovative
            &quot;Hex Gen 1 Bags&quot; NFT – start minting your favorites now!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <ConnectWallet />
        </div>

        <div className="flex justify-center my-12">
          <div className="card w-80 glass text-white">
            <figure>
              <Carousel />
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
                {/* <button className="bg-[#e7d17a] text-black px-5 py-2 hover:bg-red-600">
                  Mint Now!
                </button> */}
                <Web3Button
                  className="bg-[#e7d17a] text-black px-5 py-2 hover:bg-red-600"
                  contractAddress={contractAddress}
                  contractAbi={erc721ABI}
                  theme="dark"
                  // Call the name of your smart contract function
                  action={(contract) => contract.call("mint", [1])}
                  onError={(error: any) =>
                    toast.error(error.reason, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    })
                  }
                >
                  Mint Now!
                </Web3Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mint;
