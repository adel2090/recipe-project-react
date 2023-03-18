import React from "react";
import RecipeCard from "../../../components/recipeCard/RecipeCard";


const RecipeList = (props) => {
  return (
    
     
      <div className="recipes-container">
        {props.recipes &&
          props.recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
      </div>
   
  );
};

export default RecipeList;
