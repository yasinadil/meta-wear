import Slider from "@/components/Slider/Slider";
import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Collections() {
  return (
    <>
      <Head>
        <title>NFT COLLECTIONS | Stealth Meta Wear</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <div className="pt-28 md:pt-36 h-screen">
        <h1
          className="text-center text-white"
          style={{ fontSize: "oswald-extralight" }}
        >
          EXPLORE OUR COLLECTIONS
        </h1>
        <div className="py-10">
          <Slider />
        </div>
        <div
          className="text-center text-white pt-6"
          style={{ fontFamily: "oswald-extralight" }}
        >
          <h2 className="text-2xl">META WEAR</h2>
          <h3>STEALTH</h3>
          <Link href="mailto:info@stealthmetawear.com">
            <h3 className="py-3"> info@stealthmetawear.com</h3>
          </Link>
          <h3>©2023 by StealthMetaWear</h3>
        </div>
      </div>
    </>
  );
}
