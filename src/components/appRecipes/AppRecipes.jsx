import React, { useEffect, useState } from "react";
// import RecipeList from "../../pages/recipesList/RecipeList";
import RecipeList1 from "../../pages/recipe/recipesList/RecipeList1";
import RecipeHeading from "../common/RecipeHeading";
import SearchBox from "../common/SearchBox";
import axios from "axios";

//===========================================================
//let recipesData = [];
// const recipesArr = [
//   {
//     title: "Chicken Pan Pizza",
//     image: "./image/gallery/img_1.jpg",
//     authorImg: "./image/top-chefs/img_1.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "Spaghetti and Meatballs",
//     image: "./image/gallery/img_2.jpg",
//     authorImg: "./image/top-chefs/img_2.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "American Cheese Burger",
//     image: "./image/gallery/img_5.jpg",
//     authorImg: "./image/top-chefs/img_3.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "Mutton Biriyani",
//     image: "./image/gallery/img_6.jpg",
//     authorImg: "./image/top-chefs/img_5.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "Japanese Sushi",
//     image: "./image/gallery/img_10.jpg",
//     authorImg: "./image/top-chefs/img_6.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "Chicken Pan Pizza",
//     image: "./image/gallery/img_1.jpg",
//     authorImg: "./image/top-chefs/img_1.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "Spaghetti and Meatballs",
//     image: "./image/gallery/img_4.jpg",
//     authorImg: "./image/top-chefs/img_2.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "American Cheese Burger",
//     image: "./image/gallery/img_5.jpg",
//     authorImg: "./image/top-chefs/img_3.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "Mutton Biriyani",
//     image: "./image/gallery/img_6.jpg",
//     authorImg: "./image/top-chefs/img_5.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "Japanese Sushi",
//     image: "./image/gallery/img_10.jpg",
//     authorImg: "./image/top-chefs/img_6.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "American Cheese Burger",
//     image: "./image/gallery/img_5.jpg",
//     authorImg: "./image/top-chefs/img_3.jpg",
//     clock: "14",
//     users: "5",
//   },
//   {
//     title: "Mutton Biriyani",
//     image: "./image/gallery/img_6.jpg",
//     authorImg: "./image/top-chefs/img_5.jpg",
//     clock: "14",
//     users: "5",
//   },
// ];
let recipesData = [];
const AppRecipes = () => {

 

  const [recipes, setRecipes] = useState(recipesData);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  //===============get data====================================
  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/recipes/recipes");
        recipesData = data;
        setRecipes(recipesData);
      } catch (error) {
        //???
      }
    })();
  }, []);

  //===============search==================================
  useEffect(() => {
    const regex = new RegExp(searchValue, "i");
    let copyRecipesData = JSON.parse(JSON.stringify(recipesData));
    copyRecipesData = copyRecipesData.filter((item) =>
      regex.test(item.recipeTitle)
    );
    setRecipes(copyRecipesData);
  }, [searchValue]);

  //=============== local storage=======================
  // useEffect(() => {
  //   const recipesFavourite = JSON.parse(
  //     localStorage.getItem("recipe-app-favourites")
  //   );
  //   setFavourites(recipesFavourite);
  // }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("recipe-app-favourites", JSON.stringify(items));
  };

  //===============add to favourite===========================
  const addFavouritesMovie = (recipe) => {
    const newFavouritesList = [...favourites, recipe];
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  };

  //======================remove from favourite=======================
  // const removeFavouritesMovie = (recipe) => {
  //   const newFavouritesList = favourites.filter(
  //     (item) => item.id !== recipe.id
  //   );
  //   setFavourites(newFavouritesList);
  //   saveToLocalStorage(newFavouritesList);
  // };

  return (
    <div className="container recipe-app">
     

      <div className="row d-flex align-items-center mt-4 mb-4">
        <RecipeHeading heading="Recipes" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div>
        <RecipeList1
          recipes={recipes}
          handleFavouritesClick={addFavouritesMovie}
        />
      </div>

      {/* ==============favourites=================== */}
      {/* <div>
        <RecipeHeading heading="Favourites" />
      </div>
      <div>
        <RecipeList
          recipes={favourites}
          handleFavouritesClick={removeFavouritesMovie}
        />
      </div> */}
    </div>
  );
};

export default AppRecipes;
