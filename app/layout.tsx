"use client";
import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { configureChains, createClient, WagmiConfig } from "wagmi";
// import { goerli } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
import Navbar from "@/components/Navbar/Navbar";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./globals.css";

// export const metadata = {
//   title: "Digital Identity | Stealth Meta Wear",
//   description:
//     "Stealth Meta Wear is an innovative project that merges the realms of digital fashion and NFT (Non-Fungible Token) art. It aims to create a unique and cutting-edge collection of digital fashion items that are tokenized as NFTs on the blockchain.",
//   icons: {
//     icon: "../public/favicon.ico",
//   },
// };

// const { chains, provider } = configureChains(
//   [goerli],
//   [
//     alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_API_KEY! }),
//     publicProvider(),
//   ]
// );
// const { connectors } = getDefaultWallets({
//   appName: "Digital Identity | Stealth Meta Wear",
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   chains,
// });
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Digital Identity | Stealth Meta Wear</title>
        {/* <link rel="icon" href="../public/favicon.ico" /> */}
      </head>
      <body className="bg-[#121414]">
        {/* <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}> */}
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
        {/* </RainbowKitProvider>
        </WagmiConfig> */}
      </body>
    </html>
  );
}
