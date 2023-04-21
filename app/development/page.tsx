import Link from "next/link";
import React from "react";

export default function Development() {
  return (
    <div className="pb-12" data-aos="fade-up">
      {/* // <!-- component --> */}
      <div className="container mx-auto py-36 w-full h-full">
        <h1
          className="text-center text-white"
          style={{ fontFamily: "oswald-extralight" }}
        >
          {" "}
          DEVELOPMENT TIMELINE
        </h1>
        <div className="relative wrap overflow-hidden p-10 h-full hidden md:block">
          <div
            className="border-2-2 absolute border-[#e7d17a] h-full border"
            style={{ left: "50%" }}
          ></div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-col items-end w-[50%] left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-end order-1 bg-[#ccb96d] shadow-xl w-[25%] h-0.5 absolute right-[50%]">
              <div className="w-4 h-4 bg-[#fdf92d] transform -translate-x-2/4 rounded-full z-10 absolute -top-1.5 md:mt-0"></div>
            </div>
            <div className="order-1 w-1/2 px-6 py-4">
              <h3
                className="mb-3 text-[#e7d17a] text-xl text-center"
                style={{ fontFamily: "oswald-extralight" }}
              >
                Project Start
              </h3>
              <p className="text-sm leading-snug tracking-wide text-center text-[#e7d17a]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between flex-col items-end w-[75%] right-timeline">
            <div className="z-20 flex justify-end items-end order-1 bg-[#ccb96d] shadow-xl w-[25%] h-0.5 absolute left-[50%]">
              <div className="w-4 h-4 bg-[#fdf92d] rounded-full z-10 absolute -top-1.5 md:mt-0"></div>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-1/3 px-6 py-4">
              <h3
                className="mb-3 text-xl text-[#e7d17a] text-center"
                style={{ fontFamily: "oswald-extralight" }}
              >
                NFT Collection - HEX Gen1
              </h3>
              <p className="text-sm leading-snug tracking-wide text-[#e7d17a] text-center">
                Our first collection inspired by magic, fantasy and the gaming
                world. The core of the collection are 6 unique full body design
                and over 100 collectable assets that can be combine to create
                your own style.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-col items-end w-[50%] left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-end order-1 bg-[#ccb96d] shadow-xl w-[25%] h-0.5 absolute right-[50%]">
              <div className="w-4 h-4 bg-[#fdf92d] transform -translate-x-2/4 rounded-full z-10 absolute -top-1.5 md:mt-0"></div>
            </div>
            <div className="order-1 w-1/2 px-6 py-4">
              <h3
                className="mb-3 text-gray-700 text-xl text-center"
                style={{ fontFamily: "oswald-extralight" }}
              >
                NFT Collection - Cybex Gen1
              </h3>
              <p className="text-sm leading-snug tracking-wide text-center text-gray-700">
                Inspired by futuristic and cyberpunk environment, this
                collection is designed to bring bright colors and combine metal
                with future tech.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between flex-col items-end w-[75%] right-timeline">
            <div className="z-20 flex justify-end items-end order-1 bg-[#ccb96d] shadow-xl w-[25%] h-0.5 absolute left-[50%]">
              <div className="w-4 h-4 bg-[#fdf92d] rounded-full z-10 absolute -top-1.5 md:mt-0"></div>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-1/3 px-6 py-4">
              <h3
                className="mb-3 text-xl text-gray-700 text-center"
                style={{ fontFamily: "oswald-extralight" }}
              >
                NFT Collection - HEX Gen1
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-700 text-center">
                Our first collection inspired by magic, fantasy and the gaming
                world. The core of the collection are 6 unique full body design
                and over 100 collectable assets that can be combine to create
                your own style.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-col items-end w-[50%] left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-end order-1 bg-[#ccb96d] shadow-xl w-[25%] h-0.5 absolute right-[50%]">
              <div className="w-4 h-4 bg-[#fdf92d] transform -translate-x-2/4 rounded-full z-10 absolute -top-1.5 md:mt-0"></div>
            </div>
            <div className="order-1 w-1/2 px-6 py-4">
              <h3
                className="mb-3 text-gray-700 text-xl text-center"
                style={{ fontFamily: "oswald-extralight" }}
              >
                NFT Collection - Cybex Gen1
              </h3>
              <p className="text-sm leading-snug tracking-wide text-center text-gray-700">
                Inspired by futuristic and cyberpunk environment, this
                collection is designed to bring bright colors and combine metal
                with future tech.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between flex-col items-end w-[75%] right-timeline">
            <div className="z-20 flex justify-end items-end order-1 bg-[#ccb96d] shadow-xl w-[25%] h-0.5 absolute left-[50%]">
              <div className="w-4 h-4 bg-[#fdf92d] rounded-full z-10 absolute -top-1.5 md:mt-0"></div>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-1/3 px-6 py-4">
              <h3
                className="mb-3 text-xl text-gray-700 text-center"
                style={{ fontFamily: "oswald-extralight" }}
              >
                NFT Collection - HEX Gen1
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-700 text-center">
                Our first collection inspired by magic, fantasy and the gaming
                world. The core of the collection are 6 unique full body design
                and over 100 collectable assets that can be combine to create
                your own style.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-col items-end w-[50%] left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-end order-1 bg-[#ccb96d] shadow-xl w-[25%] h-0.5 absolute right-[50%]">
              <div className="w-4 h-4 bg-[#fdf92d] transform -translate-x-2/4 rounded-full z-10 absolute -top-1.5 md:mt-0"></div>
            </div>
            <div className="order-1 w-1/2 px-6 py-4">
              <h3
                className="mb-3 text-gray-700 text-xl text-center"
                style={{ fontFamily: "oswald-extralight" }}
              >
                NFT Collection - Cybex Gen1
              </h3>
              <p className="text-sm leading-snug tracking-wide text-center text-gray-700">
                Inspired by futuristic and cyberpunk environment, this
                collection is designed to bring bright colors and combine metal
                with future tech.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between flex-col items-end w-[75%] right-timeline">
            <div className="z-20 flex justify-end items-end order-1 bg-[#ccb96d] shadow-xl w-[25%] h-0.5 absolute left-[50%]">
              <div className="w-4 h-4 bg-[#fdf92d] rounded-full z-10 absolute -top-1.5 md:mt-0"></div>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-1/3 px-6 py-4">
              <h3
                className="mb-3 text-xl text-gray-700 text-center"
                style={{ fontFamily: "oswald-extralight" }}
              >
                NFT Collection - HEX Gen1
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-700 text-center">
                Our first collection inspired by magic, fantasy and the gaming
                world. The core of the collection are 6 unique full body design
                and over 100 collectable assets that can be combine to create
                your own style.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-col items-end w-[50%] left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-end order-1 bg-[#ccb96d] shadow-xl w-[25%] h-0.5 absolute right-[50%]">
              <div className="w-4 h-4 bg-[#fdf92d] transform -translate-x-2/4 rounded-full z-10 absolute -top-1.5 md:mt-0"></div>
            </div>
            <div className="order-1 w-1/2 px-6 py-4">
              <h3
                className="mb-3 text-gray-700 text-xl text-center"
                style={{ fontFamily: "oswald-extralight" }}
              >
                NFT Collection - Cybex Gen1
              </h3>
              <p className="text-sm leading-snug tracking-wide text-center text-gray-700">
                Inspired by futuristic and cyberpunk environment, this
                collection is designed to bring bright colors and combine metal
                with future tech.
              </p>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="my-4 px-4">
            <div className="divider bg-[#e7d17a] mt-0 h-0.5"></div>
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-2 md:my-0"></div>
            </div>
            <h1
              className="mb-3 text-[#e7d17a] text-2xl text-center"
              style={{ fontFamily: "oswald-extralight" }}
            >
              Project Start
            </h1>
            <p className="text-xl leading-snug tracking-wide text-center text-[#e7d17a]">
              The project was started by a team of very passionate game
              developers with many years of experience on AAA titles. We started
              the project with the goal of developing awesome looking digital
              clothing that can be used in your favorite games or platforms.
            </p>
          </div>
          <div className="my-4 px-4">
            <div className="divider bg-[#e7d17a] mt-0 h-0.5"></div>
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-2 md:my-0"></div>
            </div>
            <h1
              className="mb-3 text-[#e7d17a] text-2xl text-center"
              style={{ fontFamily: "oswald-extralight" }}
            >
              NFT Collection - HEX Gen1
            </h1>
            <p className="text-xl leading-snug tracking-wide text-center text-[#e7d17a]">
              Our first collection inspired by magic, fantasy and the gaming
              world. The core of the collection are 6 unique full body design
              and over 100 collectable assets that can be combine to create your
              own style.
            </p>
          </div>
          <div className="my-4 px-4">
            <div className="divider bg-[#e7d17a] mt-0 h-0.5"></div>
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-2 md:my-0"></div>
            </div>
            <h1
              className="mb-3 text-gray-500 text-2xl text-center"
              style={{ fontFamily: "oswald-extralight" }}
            >
              NFT Staking
            </h1>
            <p className="text-xl leading-snug tracking-wide text-center text-gray-500">
              Have your digital identity on social media. You can post, stream
              and share with everyone online using your very own unique digital
              clothing.
            </p>
          </div>
          <div className="my-4 px-4">
            <div className="divider bg-[#e7d17a] mt-0 h-0.5"></div>
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-2 md:my-0"></div>
            </div>
            <h1
              className="mb-3 text-gray-500 text-2xl text-center"
              style={{ fontFamily: "oswald-extralight" }}
            >
              TikTok Integration
            </h1>
            <p className="text-xl leading-snug tracking-wide text-center text-gray-500">
              Owning NFT assets will give you access to a specific files
              developed so those assets can be used as AR filter on TikTok.
            </p>
          </div>
          <div className="my-4 px-4">
            <div className="divider bg-[#e7d17a] mt-0 h-0.5"></div>
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-2 md:my-0"></div>
            </div>
            <h1
              className="mb-3 text-gray-500 text-2xl text-center"
              style={{ fontFamily: "oswald-extralight" }}
            >
              NFT Collection - Cybex Gen1
            </h1>
            <p className="text-xl leading-snug tracking-wide text-center text-gray-500">
              Inspired by futuristic and cyberpunk environment, this collection
              is designed to bring bright colors and combine metal with future
              tech.
            </p>
          </div>
          <div className="my-4 px-4">
            <div className="divider bg-[#e7d17a] mt-0 h-0.5"></div>
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-2 md:my-0"></div>
            </div>
            <h1
              className="mb-3 text-gray-500 text-2xl text-center"
              style={{ fontFamily: "oswald-extralight" }}
            >
              Game UGC Assets
            </h1>
            <p className="text-xl leading-snug tracking-wide text-center text-gray-500">
              Giving access to NFT owner to specially made assets that can be
              imported inside game engines like Unreal or can be imported inside
              games that allow for user generated content.
            </p>
          </div>
          <div className="my-4 px-4">
            <div className="divider bg-[#e7d17a] mt-0 h-0.5"></div>
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-2 md:my-0"></div>
            </div>
            <h1
              className="mb-3 text-gray-500 text-2xl text-center"
              style={{ fontFamily: "oswald-extralight" }}
            >
              SMW Token
            </h1>
            <p className="text-xl leading-snug tracking-wide text-center text-gray-500">
              Developing and supporting our project economy with a Stealth Meta
              Wear Token.
            </p>
          </div>
          <div className="my-4 px-4">
            <div className="divider bg-[#e7d17a] mt-0 h-0.5"></div>
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-2 md:my-0"></div>
            </div>
            <h1
              className="mb-3 text-gray-500 text-2xl text-center"
              style={{ fontFamily: "oswald-extralight" }}
            >
              Application Launch
            </h1>
            <p className="text-xl leading-snug tracking-wide text-center text-gray-500">
              We are developing an application that will allow users to buy and
              trade digital clothing. We are also working on set of features
              that will allow you to create content using your NFT collection
              assets.
            </p>
          </div>
          <div className="my-4 px-4">
            <div className="divider bg-[#e7d17a] mt-0 h-0.5"></div>
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-[#e7d17a] rounded-full z-10 my-2 md:my-0"></div>
            </div>
            <h1
              className="mb-3 text-gray-500 text-2xl text-center"
              style={{ fontFamily: "oswald-extralight" }}
            >
              NFT Collection - AVA Gen1
            </h1>
            <p className="text-xl leading-snug tracking-wide text-center text-gray-500">
              An exiting collection that is inspired by K-Pop and modern looks.
              We are pushing so everything looks slick and clean while being
              supported by animated graphical elements.
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center text-white"
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
  );
}
