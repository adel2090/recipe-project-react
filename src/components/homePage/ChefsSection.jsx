import React from "react";
import ChefCard from "./ChefCard";

const ChefsSection = () => {
  const chefs = [
    {
      name: "Tali Lahave",
      img: "/image/top-chefs/img_7.jpg",
      recipeCount: "10",
      cuisine: "Israel",
    },
    {
      name: "Sara Zilberman",
      img: "/image/top-chefs/img_8.jpg",
      recipeCount: "5",
      cuisine: "Israel",
    },
  ];
  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chefs</h1>
      <div className="top-chiefs-container">
        {chefs.map((chef) => (
          <ChefCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default ChefsSection;
