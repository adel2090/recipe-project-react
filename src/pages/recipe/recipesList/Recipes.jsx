import { useState } from "react";
import RecipeCard from "../recipe/RecipeCard";
import RecipeHeading from "../../components/common/RecipeHeading";

const Recipes1 = ({ recipeItems }) => {
  return (
    <div className="container">
      <RecipeHeading heading="Recipes Page" />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {recipeItems.map((item) => (
          <RecipeCard
            img={item.img}
            title={item.title}
            clock={item.clock}
            users={item.users}
            numStar={item.numStar}
            description={item.description}
            id={item.id}
            recipeItems={recipeItems}
          />
        ))}
      </div>
    </div>
  );
};
export default Recipes1;
