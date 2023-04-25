"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/SMW_Logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import "./Navbar.module.css";

const contractAddress = "0x4CcAaB776FaEE0fD203958C85B89811d08990dBB";
const erc721ABI = require("../ABI/erc721abi.json");
const Navbar = () => {
  const [clicked, isClicked] = React.useState(false);
  return (
    <>
      <div className="block md:hidden relative">
        <div className="flex text-black dark:text-white">
          <div className="flex-1 py-6 absolute left-[50%] translate-x-[-50%]">
            <div className="flex justify-center">
              <Link href={"/"}>
                <Image width={50} height={50} src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="flex-none absolute right-0">
            <div className="dropdown dropdown-end">
              <label className="btn btn-ghost btn-circle avatar my-6 mr-4">
                <button
                  tabIndex={0}
                  onClick={() => isClicked(!clicked)}
                  className="btn btn-square btn-ghost z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </label>
              <ul
                tabIndex={0}
                className={
                  clicked
                    ? "menu menu-compact dropdown-content p-2 shadow blurNav w-[100vw] fixed top-0 h-[100vh]"
                    : "hidden"
                }
                style={{ fontFamily: "proxima" }}
              >
                <li className="mt-8 mb-8">
                  <div className="flex justify-end">
                    <span>
                      <svg
                        className="fill-black"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 64 64"
                        onClick={() => isClicked(false)}
                      >
                        <path d="M51.092 15.737L48.263 12.908 32 29.172 15.737 12.908 12.908 15.737 29.172 32 12.908 48.263 15.737 51.092 32 34.828 48.263 51.092 51.092 48.263 34.828 32z"></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-center mb-2">
                    {" "}
                    <Link
                      className="text-black font-semibold text-xl"
                      href={"/"}
                      onClick={() => isClicked(false)}
                    >
                      Landing Page
                    </Link>
                  </div>
                </li>

                <li className="border border-y-black border-x-0">
                  <div className="flex justify-center my-2">
                    {" "}
                    <Link
                      className="text-black font-semibold text-xl"
                      href={"/nft-collections"}
                      onClick={() => isClicked(false)}
                    >
                      NFT Collections
                    </Link>
                  </div>
                </li>

                <li>
                  <div className="flex justify-center">
                    {" "}
                    <Link
                      className="text-black font-semibold text-xl"
                      href={"/development"}
                      onClick={() => isClicked(false)}
                    >
                      Development
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-5 left-[50%] translate-x-[-46%] text-white font-light">
        <div className="hidden md:block">
          <div className="flex flex-row justify-center">
            <div className="flex justify-around items-center gap-x-10 text-lg">
              <a href={"/#about"} style={{ scrollBehavior: "smooth" }}>
                ABOUT
              </a>
              <Link href={"/development"}>DEVELOPMENT</Link>{" "}
              <Link href={"/"}>
                {" "}
                <Image width={50} height={50} src={logo} alt="logo" />
              </Link>
              <Link href={"/nft-collections"}>NFT COLLECTIONS</Link>
              <div className="flex justify-center items-center">
                <ConnectWallet
                  btnTitle="CONNECT WALLET"
                  theme="dark"
                  className="bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Navbar;
