import CustomImage from "../CustomImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUsers,
  faHeart,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Favorite from "../../pages/recipe/favourites/Favorite";

//=====================================================
const RecipeCard = ({ recipe }) => {
  const logIn = useSelector((state) => state.auth.logIn);

  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.recipeImg} pt={"65%"} />
      <div className="recipe-card-info">
        {/* name chef */}
        <div>chef : {recipe.user_id.name}</div>

        <p className="recipe-title">{recipe.recipeTitle}</p>
        <div className="recipe-time-person">
          <FontAwesomeIcon icon={faClock} className="clock" />
          {recipe.recipeClock}
          <FontAwesomeIcon icon={faUsers} className="users" />
          {recipe.recipeUser}
        </div>

        <p className="recipe-desc">{recipe.recipeDescription}</p>

        <Link className="view-btn" to={`/recipePage/${recipe._id}`} >
          <FontAwesomeIcon icon={faPenToSquare} />
          VIEW RECIPE
        </Link>

        {/* favorite ****************************************/}
        {logIn && (
          <div style={{ width: "85%", margin: "1rem auto" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Favorite
                userForm={localStorage.getItem("userId")}
                recipeInfo={recipe}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default RecipeCard;
