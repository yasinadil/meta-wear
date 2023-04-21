import Navbar from "@/components/Navbar/Navbar";

import "./globals.css";

export const metadata = {
  title: "Digital Identity | Stealth Meta Wear",
  description:
    "Stealth Meta Wear is an innovative project that merges the realms of digital fashion and NFT (Non-Fungible Token) art. It aims to create a unique and cutting-edge collection of digital fashion items that are tokenized as NFTs on the blockchain.",
  icons: {
    icon: "../public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#121414]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
