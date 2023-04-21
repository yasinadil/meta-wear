"use client";
import React from "react";
import Image from "next/image";
import item1 from "../../public/assets/clothing/arms_01.jpg";
import item2 from "../../public/assets/clothing/arms_02.jpg";
import item3 from "../../public/assets/clothing/arms_03.jpg";
import item4 from "../../public/assets/clothing/hands_01.jpg";
import item5 from "../../public/assets/clothing/hands_02.jpg";
import item6 from "../../public/assets/clothing/hands_04.jpg";
import item7 from "../../public/assets/clothing/hands_05.jpg";
import item8 from "../../public/assets/clothing/hat_01.jpg";
import item9 from "../../public/assets/clothing/pants_01.jpg";
import item10 from "../../public/assets/clothing/pants_02.jpg";
import item11 from "../../public/assets/clothing/shoe_01.jpg";
import item12 from "../../public/assets/clothing/shoe_02.jpg";
import item13 from "../../public/assets/clothing/shoe_03.jpg";
import item14 from "../../public/assets/clothing/shoe_04.jpg";
import item15 from "../../public/assets/clothing/shoe_05.jpg";
import item16 from "../../public/assets/clothing/shoe_06.jpg";
import item17 from "../../public/assets/clothing/shoulder_01.jpg";
import item18 from "../../public/assets/clothing/shoulder_02.jpg";
import item19 from "../../public/assets/clothing/shoulder_03.jpg";
import item20 from "../../public/assets/clothing/shoulder_04.jpg";
import item21 from "../../public/assets/clothing/tops_01.jpg";
import item22 from "../../public/assets/clothing/tops_02.jpg";
import item23 from "../../public/assets/clothing/tops_03.jpg";

const images = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  item21,
  item22,
  item23,
];

const Slider = () => {
  return (
    <div className="varousel">
      <div className="slider">
        <div className="slide-track">
          {images.map((image, index) => (
            <div key={index} className="slide">
              <Image className="h-[30vh]" src={image} alt="item" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slider;
