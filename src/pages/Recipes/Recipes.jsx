import React, { useEffect, useState } from "react";

import RecipeHeading from "../../components/common/RecipeHeading";
import SearchBox from "../../components/common/SearchBox";
import axios from "axios";
import RecipeList from "../recipe/recipesList/RecipeList";

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
const Recipes = () => {
  const [recipes, setRecipes] = useState(recipesData);
  const [searchValue, setSearchValue] = useState("");

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
  //===========================================================

  return (
    <div className="">
      <div >
        <RecipeHeading heading="Recipes" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default Recipes;
