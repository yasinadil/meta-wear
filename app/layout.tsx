"use client";
import Navbar from "@/components/Navbar/Navbar";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#121414]">
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
      </body>
    </html>
  );
}
