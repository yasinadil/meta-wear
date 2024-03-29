"use client";
import React, { useEffect } from "react";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Carousel from "./Carousel";
import { ToastContainer, toast } from "react-toastify";
import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";

import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
// import LaunchCountdown from "@/containers/LaunchCountdown";
const erc721ABI = require("../ABI/erc721abi.json");

const contractAddress = "0xfB82675cC33C8FcbC2822d958697Cbd808A8F687";

const LaunchCountdown = dynamic(() => import("@/containers/LaunchCountdown"), {
  ssr: false,
});

const Mint = () => {
  const [minted, setMinted] = React.useState("0");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_ALCHEMY_LINK!
    );
    let contract = new ethers.Contract(contractAddress, erc721ABI, provider);

    let Minted = await contract.totalSupply();
    let total = Number(Minted);
    setMinted(total.toString());
  }

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
        <h1 className="text-center text-yellow-200">MINT</h1>
        <div className="flex justify-center items-start">
          <p className="w-5/6 text-center text-white mb-4 leading-9 text-xl tracking-wide">
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
        <LaunchCountdown />{" "}
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
              <div className="px-2">
                <span>Minted</span>
                <span className="float-right">{minted}/111</span>
              </div>
              <div className="card-actions justify-center mt-6">
                {/* <button className="bg-[#e7d17a] text-black px-5 py-2 hover:bg-red-600">
                  Mint Now!
                </button> */}
                <Web3Button
                  className="bg-[#e7d17a] text-black py-2 hover:bg-red-600"
                  contractAddress={contractAddress}
                  contractAbi={erc721ABI}
                  theme="dark"
                  // Call the name of your smart contract function
                  action={(contract) => contract.call("mint", [1])}
                  onSuccess={async () => {
                    toast.success("Successfully minted your HEX Gen 1 Bag!", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    const provider = new ethers.providers.JsonRpcProvider(
                      process.env.NEXT_PUBLIC_ALCHEMY_LINK!
                    );
                    let contract = new ethers.Contract(
                      contractAddress,
                      erc721ABI,
                      provider
                    );

                    let Minted = await contract.totalSupply();
                    let total = Number(Minted);
                    setMinted(total.toString());
                  }}
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
