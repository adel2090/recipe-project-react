import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getRecipe } from "../../services/recipe.services";
import { toast } from "react-toastify";
import RecipeCard1 from "../../components/recipeCard/RecipeCard1";
import CustomImage from "../../components/CustomImage";
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
import { useSelector } from "react-redux";
import Favorite from "./favourites/Favorite";
//==============================================================================
const RecipePage = () => {
  const logIn = useSelector((state) => state.auth.logIn);
  const userData = useSelector((state) => state.auth.userData);
  const userInfo = useSelector((state) => state.auth.userInfo);
  // console.log("userData",userData);

  const [recipe, setRecipe] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await getRecipe(`${id}`);
        console.log("data from getRecipe", { data });
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
  //return recipe && <RecipeCard1 recipe={recipe} />;
  /**
   *  recipeTitle: "",
    recipeImg: "",
    recipeDescription: "",
    recipeClock: "",
    recipeUser: "",
    recipeType: "",
    recipeLevel: "",
    recipeIngredients: "",
    recipePreparation: "",
   */
  return (
    recipe && (
      <div className="recipe-card">
        <CustomImage imgSrc={recipe.recipeImg} pt={"65%"} />
        <div className="recipe-card-info">
          {/* <img src={recipe.authorImg} className="auther-img" alt="abc" /> */}
          <p className="recipe-title">{recipe.recipeTitle}</p>
          <div className="recipe-time-person">
            <FontAwesomeIcon icon={faClock} className="clock" />
            {recipe.recipeClock}
            <FontAwesomeIcon icon={faUsers} className="users" />
            {recipe.recipeUser}
          </div>

          <p className="recipe-desc">{recipe.recipeDescription}</p>

          <p>{recipe.recipeType}</p>
          <p>{recipe.recipeLevel}</p>
          <p>{recipe.recipeIngredients}</p>
          <p>{recipe.recipePreparation}</p>

          {/* favorite ***************************************
          {logIn && <div style={{ width: "85%", margin: "1rem auto" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Favorite
                userForm={localStorage.getItem('userId')}
                recipeId={recipe.id}
                recipeInfo={recipe}
              />
            </div>
          </div>} */}
          

          {localStorage.getItem('userId') === recipe.user_id ? (
            <Link
              to={`/editrecipe/${recipe._id}`}
              className="btn btn-warning ms-2"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
              Edit
            </Link>
          ) : (
            <></>
          )}
          {/* <Link to={`/recipePage/${recipe._id}`} className="btn btn-warning ms-2">
          <FontAwesomeIcon icon={faPenToSquare} />
          VIEW RECIPE
        </Link> */}
        </div>
      </div>
    )
  );
};

export default RecipePage;
