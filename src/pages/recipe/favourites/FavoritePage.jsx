import "./favoritePage.css";
import React, { useEffect, useState } from "react";
import RecipeCard1 from "../../../components/recipeCard/RecipeCard";
import axios from "axios";
import { useSelector } from "react-redux";
import CustomImage from "../../../components/CustomImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUsers,
  faStar,
  faHeart,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import RecipeList1 from "../recipesList/RecipeList";
import { Popover } from "bootstrap";

//===================================================================

const FavoritePage = () => {
  const variable = { userForm: localStorage.getItem("userId") };

  const [favoriteRecipe, setFavoriteRecipe] = useState([]);

  useEffect(() => {
    fetchFavoritedRecipes();
  }, []);

  const fetchFavoritedRecipes = () => {
    axios.post("/favorite/getFavoritedRecipe", variable).then((res) => {
      if (res.data.success) {
        //console.log("res.data.favorites",res.data.favorites);
        setFavoriteRecipe(res.data.favorites);
      } else {
        alert("Failed to get favorited videos");
      }
    });
  };

  const onClickRemove = (recipeId, userForm) => () => {
    const variables = {
      recipeId: recipeId,
      userFrom: userForm,
    };

    axios.post("/favorite/removeFromFavorite", variables).then((res) => {
      if (res.data.success) {
        //console.log(res.data);
        fetchFavoritedRecipes();
      } else {
        alert(" Failed to remove from favorite");
      }
    });
  };

  const renderTableBody = favoriteRecipe.map((recipe, index) => {
    console.log(recipe);
    return (
      <tr key={index}>
        <td>{recipe.recipeTitle}</td>
        <td>{recipe.recipeId}</td>
        <td>
          <button onClick={onClickRemove(recipe.variable, recipe.userForm)}>
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h3>Favorite Recipes By Me</h3>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Recipe Title </th>
            <th>Recipe Id</th>
            <th>Remove from favorites</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
};

export default FavoritePage;
