import Navbar from "@/components/Navbar/Navbar";

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
    <html lang="en">
      <body className="bg-[#121414]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
