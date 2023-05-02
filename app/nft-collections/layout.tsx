"use client";
import Navbar from "@/components/Navbar/Navbar";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../globals.css";
export const metadata = {
  title: "NFT COLLECTIONS | Stealth Meta Wear",
  description:
    "Stealth Meta Wear is an innovative project that merges the realms of digital fashion and NFT (Non-Fungible Token) art. It aims to create a unique and cutting-edge collection of digital fashion items that are tokenized as NFTs on the blockchain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#121414]">
      <ThirdwebProvider
        autoConnect={true}
        activeChain="ethereum"
        sdkOptions={{
          alchemyApiKey: process.env.NEXT_PUBLIC_API_KEY!, // your Alchemy API key
        }}
      >
        <Navbar />
        {children}
      </ThirdwebProvider>
    </div>
  );
}
