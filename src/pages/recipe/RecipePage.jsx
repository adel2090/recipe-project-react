import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getRecipe } from "../../services/recipe.services";
import { toast } from "react-toastify";
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

//==============================================================================
const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await getRecipe(`${id}`);
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
      <div className="recipe-card">
        <CustomImage imgSrc={recipe.recipeImg} pt={"65%"} />
        <div className="recipe-card-info">
          <p className="recipe-title">{recipe.recipeTitle}</p>
          <div className="recipe-time-person">
            <FontAwesomeIcon icon={faClock} className="clock" />
            {recipe.recipeClock}
            <FontAwesomeIcon icon={faUsers} className="users" />
            {recipe.recipeUser}
          </div>

          <p className="recipe-desc">{recipe.recipeDescription}</p>

          <p>
            <b>Type: </b> {recipe.recipeType}
          </p>
          <p>
            <b>Level: </b> {recipe.recipeLevel}
          </p>
          <p>
            <b>Ingredients:</b> {recipe.recipeIngredients}
          </p>
          <p>
            <b>Preparation:</b> {recipe.recipePreparation}
          </p>

          {localStorage.getItem("userId") === recipe.user_id._id ? (
            <>
              <Link
                to={`/editrecipe/${recipe._id}`}
                className="btn btn-warning ms-2"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
                Edit
              </Link>

              <Link
                to={`/deleteRecipe/${recipe._id}`}
                className="btn btn-warning ms-2"
              >
                <FontAwesomeIcon icon={faTrashCan} />
                Delete
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    )
  );
};

export default RecipePage;
