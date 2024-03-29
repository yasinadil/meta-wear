"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Item1 from "../../public/assets/items/HexBag_1.jpg";
import Item2 from "../../public/assets/items/HexBag_4.jpg";
import Item3 from "../../public/assets/items/HexBag_5.jpg";
import Item4 from "../../public/assets/items/HexBag_10.jpg";
import Item5 from "../../public/assets/items/HexBag_27.jpg";
import Item6 from "../../public/assets/items/HexBag_35.jpg";
import Item7 from "../../public/assets/items/HexBag_57.jpg";
import Item8 from "../../public/assets/items/HexBag_60.jpg";
import Item9 from "../../public/assets/items/HexBag_92.jpg";
import Image from "next/image";

const slides = [Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9];

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {/* {slides} */}
        {slides.map((a, i) => (
          <Image key={i} src={a} alt="slide" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i: number) => (
            <div
              key={i}
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
