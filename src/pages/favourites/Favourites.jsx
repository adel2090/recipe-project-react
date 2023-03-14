import React, { useEffect } from "react";
import { useState } from "react";
import RecipeHeading from "../../../components/common/RecipeHeading";
import RecipeList from "../../recipesList/RecipeList1";
//============================================================
const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const recipesFavourite = JSON.parse(
      localStorage.getItem("recipe-app-favourites")
    );
    setFavourites(recipesFavourite);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("recipe-app-favourites", JSON.stringify(items));
  };

  const removeFavouritesMovie = (recipe) => {
    const newFavouritesList = favourites.filter(
      (item) => item.id !== recipe.id
    );
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  };

  return (
    <div>
      <div>
        <RecipeHeading heading="Favourites" />
      </div>
      <div>
        <RecipeList
          recipes={favourites}
          handleFavouritesClick={removeFavouritesMovie}
        />
      </div>
    </div>
  );
};

export default Favourites;
