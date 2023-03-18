import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { getMyRecipe } from "../../services/recipe.services";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import RecipeList from "./recipesList/RecipeList";

//================================================================
let recipeArray = [];

const MyRecipe = () => {

  const [recipe, setRecipe] = useState(recipeArray);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await getMyRecipe();
        recipeArray = data;
        setRecipe(data);
      } catch (error) {
        toast.error("Recipe page is failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    })();
  }, []);

  
  return (
    recipe && (
      <Fragment>
        <h1>MyRecipe</h1>
        
        <Link to={`/createrecipe`} className="btn btn-warning ms-2">
          <FontAwesomeIcon icon={faPenToSquare} />
          create recipe
        </Link>
        <RecipeList recipes={recipe} />;
      </Fragment>
    )
  );
};

export default MyRecipe;
