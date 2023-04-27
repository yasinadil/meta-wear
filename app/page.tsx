"use client";
import Image from "next/image";
import Script from "next/script";
import hexgen from "../public/assets/Page-HexGen1-2.png";
import setup from "../public/assets/ClothingSetup.gif";
import banner from "../public/assets/SMW-Logo_Glitch.gif";
import nobg from "../public/assets/SMW-NoBG.gif";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import Mint from "@/components/Mint/Mint";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Digital Identity | Stealth Meta Wear</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Script src="https://kit.fontawesome.com/aa92af4b25.js" />
      <main>
        {/* <div className="bg-[url('../public/assets/SMW-Logo_Glitch.gif')] bg-cover bg-no-repeat w-[100%] h-[100vh]"></div> */}
        <Image
          className="h-[35vh] md:h-[100vh] w-[100vw]"
          src={banner}
          alt="banner"
        />
        <div className="divider bg-yellow-200 h-2 m-0"></div>
        <div className="divider bg-yellow-200 h-0.5 mt-2 mb-0.5"></div>
        <div className="flex justify-center" id="about">
          <div className="w-10/12 md:w-3/4">
            <h1 className="text-center text-yellow-200">ABOUT</h1>
            <div className="flex justify-center gap-x-4 mt-4">
              <Link
                href="https://www.tiktok.com/@stealthmetawear?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-tiktok text-white fa-xl"></i>
              </Link>

              <Link
                href="https://twitter.com/stealthmetawear"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter text-white fa-xl"></i>
              </Link>

              <Link
                href="https://www.instagram.com/stealthmetawear/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram text-white fa-xl"></i>
              </Link>
            </div>
            <p className="text-center text-white my-8 leading-9 text-xl tracking-wide">
              Stealth Meta Wear is an innovative project that merges the realms
              of digital fashion and NFT (Non-Fungible Token) art. It aims to
              create a unique and cutting-edge collection of digital fashion
              items that are tokenized as NFTs on the blockchain. As a
              pioneering project at the intersection of digital fashion and NFT
              art, Stealth Meta Wear aims to push the boundaries of what is
              possible in the world of fashion and digital ownership. It seeks
              to redefine the concept of fashion by combining digital design,
              virtual ownership, and cutting-edge technologies, offering a
              unique and forward-thinking experience for fashion enthusiasts and
              collectors alike.
            </p>
            <p className="text-center text-xl text-white">
              Stealth Meta Wear, experience your identity.
            </p>
            <div className="bloack md:hidden">
              <div className="flex justify-center my-10 text-[#1F2937]">
                <Link href={"/development"}>
                  <button
                    className="bg-[#e7d17a] px-5 py-2 hover:bg-red-600"
                    style={{ fontFamily: "button" }}
                  >
                    Development Timeline
                  </button>
                </Link>
              </div>
            </div>
            <div className="divider bg-yellow-200 h-0.5 mt-2 mb-0.5 block md:hidden"></div>
            <div className="block md:hidden">
              <h1 className="text-center text-white text-2xl mt-6 mb-2">
                HEX Collection
              </h1>
              <p className="text-center tracking-widerext-center text-white my-8 leading-9 text-xl tracking-wide ">
                Introducing Hex Gen1, a groundbreaking NFT collection that
                brings the enchanting world of fantasy and magic to life in the
                digital realm. Inspired by mythical creatures, mystical realms
                and the allure of the unknown, Hex Gen1 is a collection of
                unique and captivating NFTs that showcase the fusion of art,
                technology and imagination.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-10/12">
            <div className="mx-auto relative mt-2 pb-20">
              <div className="mt-10 flex justify-center">
                <div className="transform transition cursor-pointer relative flex items-center text-white rounded flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-0 md:w-4 h-0 md:h-4 bg-[#fdf92d] absolute top-[32.5%] -left-36  transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                  <div className="w-0 md:w-36 h-0 md:h-0.5 bg-[#e7d17a] absolute top-[34%] -left-36 z-0"></div>
                  <div className="absolute top-[36%] -left-64 hidden md:block">
                    <h1 className="text-base text-center my-2">
                      HEX Collection
                    </h1>
                    <p
                      className="text-sm w-60 text-center leading-5 tracking-wider "
                      style={{ fontFamily: "oswald-extralight" }}
                    >
                      Introducing Hex Gen1, a groundbreaking NFT collection that
                      brings the enchanting world of fantasy and magic to life
                      in the digital realm. Inspired by mythical creatures,
                      mystical realms and the allure of the unknown, Hex Gen1 is
                      a collection of unique and captivating NFTs that showcase
                      the fusion of art, technology and imagination.
                    </p>
                  </div>

                  <div className="w-0 md:w-4 h-4 bg-[#fdf92d] absolute top-[32.5%] -right-40 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                  <div className="w-0 h-0 md:w-36 md:h-0.5 bg-[#e7d17a] absolute top-[34%] -right-36 z-0"></div>
                  <div className="absolute top-[36%] -right-64  hidden md:block">
                    <h1 className="text-base text-center my-2">Gen 1</h1>
                    <p
                      className="text-sm w-60 text-center leading-5 tracking-wider"
                      style={{ fontFamily: "oswald-extralight" }}
                    >
                      Join us on a journey into a realm where magic meets the
                      blockchain, and immerse yourself in the spellbinding
                      allure of Hex Gen1
                    </p>
                  </div>

                  <Image
                    className="w-[354px] h-[400px] md:h-[400px] z-10"
                    src={hexgen}
                    alt="hexgen"
                  />
                </div>
              </div>
              <div className="block md:hidden">
                <h1 className="text-center text-white text-2xl mt-10 mb-2">
                  Gen 1
                </h1>
                <p className="text-center tracking-widerext-center text-white my-8 leading-9 text-xl tracking-wide ">
                  Join us on a journey into a realm where magic meets the
                  blockchain, and immerse yourself in the spellbinding allure of
                  Hex Gen1
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <button className="bg-[#e7d17a] text-black px-5 py-2 hover:bg-red-600 notherFont">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="divider bg-yellow-200 h-0.5 mt-2 mb-1.5"></div>
        <div className="divider bg-yellow-200 h-2 m-0"></div>
        <div className="hidden md:block">
          <div className="flex justify-center" id="utility">
            <div className="relative">
              <Image className="" src={setup} alt="setup" />

              <div className="w-4 h-4 bg-[#fdf92d] absolute top-[28%] left-[29%] transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-36 h-0.5 bg-[#e7d17a] absolute top-[29%] left-[29%] z-20"></div>

              <div className="absolute top-[30%] left-[22%] text-white">
                <h1
                  className="text-base text-center my-2"
                  style={{ fontFamily: "oswald-extralight" }}
                >
                  Social Media
                </h1>
                <p className="text-sm w-52 text-center">
                  Have your digital identity on social media. You can post,
                  stream and share with everyone online using your very own
                  unique digital clothing.
                </p>
              </div>

              <div className="w-4 h-4 bg-[#fdf92d] absolute top-[28%] right-[28%] transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-36 h-0.5 bg-[#e7d17a] absolute top-[29%] right-[29%] z-0"></div>

              <div className="absolute top-[30%] right-[22%] text-white">
                <h1
                  className="text-base text-center my-2"
                  style={{ fontFamily: "oswald-extralight" }}
                >
                  Trade and Collect
                </h1>
                <p className="text-sm w-52 text-center">
                  Use your digital clothing not only on you but also inside your
                  favorite games with user generated content. By owning an NFT
                  peace you can use our 3D package that is designed to be game
                  ready.
                </p>
              </div>

              <div className="w-4 h-4 bg-[#fdf92d] absolute bottom-[44%] left-[29%] transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-36 h-0.5 bg-[#e7d17a] absolute bottom-[45%] left-[29%] z-20"></div>

              <div className="absolute bottom-[28%] left-[22%] text-white">
                <h1
                  className="text-base text-center my-2"
                  style={{ fontFamily: "oswald-extralight" }}
                >
                  Photography / Videos
                </h1>
                <p className="text-sm w-52 text-center">
                  Create content that has your own vibes and unique recognizable
                  design that becomes part of your digital identity
                </p>
              </div>

              <div className="w-4 h-4 bg-[#fdf92d] absolute bottom-[44%] right-[28%] transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-36 h-0.5 bg-[#e7d17a] absolute bottom-[45%] right-[29%] z-0"></div>

              <div className="absolute bottom-[23%] right-[22%] text-white">
                <h1
                  className="text-base text-center my-2"
                  style={{ fontFamily: "oswald-extralight" }}
                >
                  Gaming
                </h1>
                <p className="text-sm w-52 text-center">
                  Use your digital clothing not only on you but also inside your
                  favorite games with user generated content. By owning an NFT
                  peace you can use our 3D package that is designed to be game
                  ready.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex justify-center">
            <div className="text-white text-center pt-10 pb-6 w-5/6">
              <h1
                className="font-light text-2xl"
                style={{ fontFamily: "oswald-extralight" }}
              >
                Social Media
              </h1>
              <p className="py-4 leading-9 text-xl tracking-wide">
                Have your digital identity on social media. You can post, stream
                and share with everyone online using your very own unique
                digital clothing.
              </p>
              <div className="flex justify-center">
                <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-4 md:my-0"></div>
              </div>
              <h1
                className="font-light text-2xl"
                style={{ fontFamily: "oswald-extralight" }}
              >
                Photography / Videos
              </h1>
              <p className="py-4 leading-9 text-xl tracking-wide">
                Create content that has your own vibes and unique recognizable
                design that becomes part of your digital identity.
              </p>
              <div className="flex justify-center">
                <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-4 md:my-0"></div>
              </div>
              <h1
                className="font-light text-2xl"
                style={{ fontFamily: "oswald-extralight" }}
              >
                Trade and Collect
              </h1>
              <p className="py-4 leading-9 text-xl tracking-wide">
                Use your digital clothing not only on you but also inside your
                favorite games with user generated content. By owning an NFT
                peace you can use our 3D package that is designed to be game
                ready.
              </p>
              <div className="flex justify-center">
                <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-4 md:my-0"></div>
              </div>
              <h1
                className="font-light text-2xl"
                style={{ fontFamily: "oswald-extralight" }}
              >
                Gaming
              </h1>
              <p className="py-4 leading-9 text-xl tracking-wide">
                Use your digital clothing not only on you but also inside your
                favorite games with user generated content. By owning an NFT
                peace you can use our 3D package that is designed to be game
                ready,
              </p>
            </div>
          </div>
        </div>
        <div className="divider bg-[#e7d17a] mt-0 h-0.5 mb-2"></div>
        <div className="divider bg-[#e7d17a] h-2 m-0"></div>
        {/* MINT SECTION HERE */}
        <Mint />
        <div className="divider bg-yellow-200 h-2 m-0"></div>
        <div className="divider bg-yellow-200 h-0.5 mt-2 mb-0.5"></div>
        <div className="block md:hidden">
          <Slider />

          <div className="divider bg-[#e7d17a] mt-0 h-0.5 mb-2"></div>
          <div className="divider bg-[#e7d17a] h-2 m-0"></div>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                className="w-screen h-screen opacity-20"
                src={nobg}
                alt="nobg"
              />
              <div className="absolute top-10 left-[50%] translate-x-[-50%]">
                {" "}
                <h1 className="text-center text-yellow-200">Development</h1>
                <p className="text-center text-white my-4">
                  Our team is currently working on HEX Gen1 collection. The
                  collection consists of six unique full body designs and more
                  than 100 collectable assets.
                </p>
                <div className="divider h-0.5 bg-yellow-300 mx-8 mb-10"></div>
                <div className="flex gap-x-4">
                  <h2 className="text-center text-white">Project Start</h2>
                  <h2 className="text-center text-yellow-400 w-52">
                    NFT Collection HEX Gen1
                  </h2>
                  <h2 className="text-center text-gray-600">
                    NFT Collection CybeX Gen1
                  </h2>
                  <h2 className="text-center text-gray-600">
                    TikTok Integration
                  </h2>
                  <h2 className="text-center text-gray-600">NFT Staking</h2>
                  <h2 className="text-center text-gray-600 w-48">
                    Game UGC Assets
                  </h2>

                  <h2 className="text-center text-gray-600">SMW Token</h2>
                  <h2 className="text-center text-gray-600">
                    Application Launch
                  </h2>
                  <h2 className="text-center text-gray-600">
                    NFT Collection AVA Gen1
                  </h2>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="bg-[#e7d17a] text-black px-5 py-2 hover:bg-red-600">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="absolute bottom-1">
                <div className="divider bg-[#e7d17a] h-2 m-0"></div>
                <div className="divider bg-[#e7d17a] h-0.5 mt-2 mb-0.5"></div>
                <Slider />

                <div className="divider bg-[#e7d17a] mt-0 h-0.5 mb-2"></div>
                <div className="divider bg-[#e7d17a] h-2 m-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-14">
          <h2 className="text-center text-white">Stealth Meta Wear 2023</h2>
          <div className="flex justify-center py-4">
            <Link href="mailto:info@stealthmetawear.com">
              <button className="bg-[#e7d17a] text-black px-5 py-2">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="flex justify-center gap-x-4 mt-4">
            <Link
              href="https://www.tiktok.com/@stealthmetawear?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-tiktok text-white fa-xl"></i>
            </Link>

            <Link
              href="https://twitter.com/stealthmetawear"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter text-white fa-xl"></i>
            </Link>

            <Link
              href="https://www.instagram.com/stealthmetawear/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram text-white fa-xl"></i>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
