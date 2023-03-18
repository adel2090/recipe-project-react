import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
//==============================================================================
const Favorite = (props) => {
  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const [favorited, setFavorited] = useState(false);

  const variable = {
    userForm: props.userForm,
    recipeId:  props.recipeInfo._id,
    recipeTitle: props.recipeInfo.recipeTitle,
    recipeImg: props.recipeInfo.recipeImg,
  };

  useEffect(() => {
    axios.post("/favorite/favoriteNumber", variable).then((res) => {
      if (res.data.success) {
        setFavoriteNumber(res.data.subscribeNumber);
        console.log("favoriteNumber",favoriteNumber);
      } else {
        alert("Failed to get Favorite Numbers");
      }
    });
    // =============================
    axios.post("/favorite/favorited", variable).then((res) => {
      if (res.data.success) {
        setFavorited(res.data.subcribed);
      } else {
        alert("Failed to get Favorite info");
      }
    });
  }, []);

  const onClickFavorite = () => {
    if (favorited) {
      // when already added
      axios.post("/favorite/removeFromFavorite", variable).then((res) => {
        if (res.data.success) {
          setFavoriteNumber(favoriteNumber - 1);
          setFavorited(!favorited);
        } else {
          alert("Failed to remove from Favorite");
        }
      });
    } else {
      // when not adding yet
      axios.post("/favorite/addToFavorite", variable).then((res) => {
        if (res.data.success) {
          setFavoriteNumber(favoriteNumber + 1);
          setFavorited(!favorited);
        } else {
          alert("Failed to add to Favorite");
        }
      });
    }
  };

  return (
    <div>
      <button onClick={onClickFavorite}>
        {favorited ? "remove from Favorite" : "Add To Favorite"}{" "}
        {favoriteNumber}
      </button>
    </div>
  );
};

export default Favorite;
