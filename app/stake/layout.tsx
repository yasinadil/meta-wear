"use client";
import Navbar from "@/components/Navbar/Navbar";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#121414]">
      <ThirdwebProvider
        autoConnect={true}
        activeChain="mumbai"
        sdkOptions={{
          alchemyApiKey: process.env.NEXT_PUBLIC_API_KEY!, // your Alchemy API key
        }}
      >
        <Navbar />
        {children}
        <div className="divider bg-yellow-200 h-2 m-0"></div>
        <div className="divider bg-yellow-200 h-0.5 mt-2 mb-0.5"></div>
        <div
          className="text-center text-white pt-24 pb-14"
          style={{ fontFamily: "oswald-extralight" }}
        >
          <h2 className="text-2xl">META WEAR</h2>
          <h3>STEALTH</h3>
          <Link href="mailto:info@stealthmetawear.com">
            <h3 className="py-3"> info@stealthmetawear.com</h3>
          </Link>
          <h3>©2023 by StealthMetaWear</h3>
        </div>
      </ThirdwebProvider>
    </div>
  );
}
