"use client";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Network, Alchemy, OwnedNft } from "alchemy-sdk";
import { useAddress } from "@thirdweb-dev/react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Web3Button } from "@thirdweb-dev/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const erc721ABI = require("../ABI/erc721abi.json");
const nftStakeABI = require("../ABI/nftStake.json");
const nftAddress = "0x19c316f29dc7e448a83b189e47f1365bf5dfa701";
const nftstakeAddress = "0x90a44c9dd75960372D45646BfacB994f28713e23";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.MATIC_MUMBAI, // Replace with your network.
};

const alchemy = new Alchemy(settings);

export default function Staking() {
  const address = useAddress();
  const [nfts, setNFTs] = useState<OwnedNft[]>([]);
  const [stakedNFTs, setStakedNFTs] = useState<object[]>([]);
  const [curr, setCurr] = useState(0);
  const [approved, isApproved] = useState(false);
  const [loading, isLoading] = useState(true);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? nfts.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === nfts.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (address) {
      const getNFTs = async () => {
        const provider = new ethers.providers.JsonRpcProvider(
          process.env.NEXT_PUBLIC_ALCHEMY_LINK!
        );
        let contract = new ethers.Contract(
          nftstakeAddress,
          nftStakeABI,
          provider
        );

        let nftcontract = new ethers.Contract(nftAddress, erc721ABI, provider);

        const approvalStatus = await nftcontract.isApprovedForAll(
          address,
          nftstakeAddress
        );
        if (approvalStatus) {
          isApproved(true);
        }
        // Print owner's wallet address:
        console.log("fetching NFTs for address:", address);
        console.log("...");

        // Print total NFT count returned in the response:
        const nftsForOwner = await alchemy.nft.getNftsForOwner(address);

        console.log("...");

        // Print contract address and tokenId for each NFT:
        for (const nft of nftsForOwner.ownedNfts) {
          if (nft.contract.address == nftAddress) {
            setNFTs((nfts) => [...nfts, nft]);
          }
        }
        const ownednftss = await contract.tokensOfOwner(address);
        ownednftss.map(async (n: any) => {
          let tokenId = Number(n);
          let earningInfo = await contract.earningInfo(address, [Number(n)]);
          let earningInfoFormated = ethers.utils.formatEther(
            earningInfo.toString()
          );
          setStakedNFTs((stakedNFTs) => [
            ...stakedNFTs,
            {
              tokenId: tokenId,
              rewards: Number(earningInfoFormated),
            },
          ]);
        });
        setTimeout(() => {
          isLoading(false);
        }, 1000);
      };
      getNFTs();
    }
  }, [address]);

  const updateRewards = async (tokenid: number) => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_ALCHEMY_LINK!
    );
    let contract = new ethers.Contract(nftstakeAddress, nftStakeABI, provider);

    let earningInfo = await contract.earningInfo(address, [Number(tokenid)]);
    let earningInfoFormated = ethers.utils.formatEther(earningInfo.toString());
    let oldState = [...stakedNFTs];
    oldState.map((n: any) => {
      if (n.tokenId == tokenid) {
        n.rewards = earningInfoFormated;
      }
    });
    setStakedNFTs(oldState);
  };

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
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="overflow-hidden relative">
                <div
                  className="flex transition-transform ease-out duration-500"
                  style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                  {nfts.map((a, i) => (
                    <img
                      key={i}
                      src={a.rawMetadata!.image}
                      alt="nft"
                      className="rounded-xl"
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="absolute bottom-4 right-0 left-0">
                  <div className="flex items-center justify-center gap-2">
                    {nfts.map((_, i: number) => (
                      <div
                        key={i}
                        className={`
                transition-all w-2 h-2 bg-white rounded-full
                ${curr === i ? "p-1" : "bg-opacity-50"}
              `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                {nfts.length > 0 && !loading && nfts[curr].title}
                {nfts.length == 0 && !loading && "No HexBags Owned"}
                {loading && "loading..."}
              </h2>
              <p>
                Limited free mint collection of Hex Bags, be one of the first to
                own unique Digital Fashion and get rewards as the project
                development grows.
              </p>

              <div className="card-actions">
                {nfts.length > 0 && approved && (
                  <Web3Button
                    className="btn btn-primary"
                    contractAddress={nftstakeAddress}
                    contractAbi={nftStakeABI}
                    theme="dark"
                    // Call the name of your smart contract function
                    action={(contract) =>
                      contract.call("stake", [[Number(nfts[curr].tokenId)]])
                    }
                    onSuccess={async () => {
                      toast.success("Successfully staked your HEX Gen 1 Bag!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
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
                    <span className="font-semibold bg-[#e7d17a] text-black py-2 hover:bg-red-600 px-4">
                      STAKE
                    </span>
                  </Web3Button>
                )}

                {nfts.length > 0 && !approved && (
                  <Web3Button
                    className="btn btn-primary"
                    contractAddress={nftAddress}
                    contractAbi={erc721ABI}
                    theme="dark"
                    // Call the name of your smart contract function
                    action={(contract) =>
                      contract.call("setApprovalForAll", [
                        nftstakeAddress,
                        true,
                      ])
                    }
                    onSuccess={() => {
                      toast.success("Approved NFT for staking!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                      isApproved(true);
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
                    <span className="font-semibold bg-[#e7d17a] text-black py-2 hover:bg-red-600 px-4">
                      APPROVE
                    </span>
                  </Web3Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-16">
        <div className="w-5/6 md:w-3/4">
          <h1 className="text-center mb-5">Staking Details</h1>
          <div className="flex flex-col items-center justify-center gap-y-5">
            {stakedNFTs.length == 0 && !loading && (
              <h2>No Hex Bags NFT staked at the moment.</h2>
            )}
            {loading && <h2>loading...</h2>}
            {stakedNFTs != undefined &&
              stakedNFTs.map((nft: any, index) => {
                return (
                  <div
                    key={index}
                    className="stats bg-primary text-primary-content"
                  >
                    <div className="stat">
                      <div className="stat-title text-white">Token ID</div>
                      <div className="stat-value">{nft.tokenId}</div>
                      <div className="stat-actions">
                        <Web3Button
                          contractAddress={nftstakeAddress}
                          contractAbi={nftStakeABI}
                          theme="dark"
                          // Call the name of your smart contract function
                          action={(contract) =>
                            contract.call("claim", [[Number(nft.tokenId)]])
                          }
                          onSuccess={async () => {
                            await updateRewards(Number(nft.tokenId));
                            toast.success(
                              "Successfully claimed your rewards!",
                              {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              }
                            );
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
                          <span className="btn btn-sm btn-success">
                            Claim Rewards
                          </span>
                        </Web3Button>
                      </div>
                    </div>

                    <div className="stat">
                      <div className="stat-title text-white">
                        Current Rewards
                      </div>
                      <div className="stat-value">
                        {Number(nft.rewards).toFixed(4)} SMW
                      </div>
                      <div className="stat-actions flex justify-end">
                        <Web3Button
                          contractAddress={nftstakeAddress}
                          contractAbi={nftStakeABI}
                          theme="dark"
                          // Call the name of your smart contract function
                          action={(contract) =>
                            contract.call("unstake", [[Number(nft.tokenId)]])
                          }
                          onSuccess={async () => {
                            toast.success(
                              "Successfully unstaked your HEX Gen 1 Bag!",
                              {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              }
                            );
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
                          <span className="btn btn-sm">UNSTAKE</span>
                        </Web3Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
