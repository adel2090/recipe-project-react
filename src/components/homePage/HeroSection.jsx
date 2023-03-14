import React from "react";
import CustomImage from "../CustomImage";


//==================================================
const image = [
  "./image/gallery/img_1.jpg",
  "./image/gallery/img_2.jpg",
  "./image/gallery/img_3.jpg",
  "./image/gallery/img_4.jpg",
  "./image/gallery/img_5.jpg",
  "./image/gallery/img_6.jpg",
  "./image/gallery/img_7.jpg",
  "./image/gallery/img_8.jpg",
  "./image/gallery/img_9.jpg",
  "./image/gallery/img_10.jpg",
];
const HeroSection = () => {
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          FoodiesHub is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <button className="btn">explore now</button>
      </div>

      <div className="col gallery">
        {image.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
