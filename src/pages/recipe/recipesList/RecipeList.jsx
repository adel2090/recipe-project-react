import React from "react";
import RecipeCard from "../../components/recipeCard/RecipeCard";

const RecipeList = (props) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* {console.log(props.recipes)} */}
        {props.recipes && props.recipes.map((recipe, index) => (
          <RecipeCard
          key={index}
          img={recipe.img}
          title={recipe.title}
          clock={recipe.clock}
          users={recipe.users}
          numStar={recipe.numStar}
          description={recipe.description}
          id={recipe.id}
          recipe={recipe}
          onclick={props.handleFavouritesClick}
        />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
