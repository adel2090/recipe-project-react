import React from "react";
import RecipeCard1 from "../../../components/recipeCard/RecipeCard1";

const RecipeList1 = (props) => {
  return (
    
    <div>
      {/* {console.log("recipe",props.recipes)} */}
      <div className="recipes-container">
        {props.recipes && props.recipes.map((recipe, index) => (
          <RecipeCard1 
          key={index}
          recipe={recipe}
        />
        ))}
      </div>
    </div>
  );
};

export default RecipeList1;
