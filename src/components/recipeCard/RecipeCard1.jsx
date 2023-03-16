import CustomImage from "../CustomImage";
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
import { useState } from "react";
import { useSelector } from "react-redux";
import Favorite from "../../pages/recipe/favourites/Favorite";




//=====================================================
const RecipeCard1 = ({ recipe }) => {
  
  const logIn = useSelector((state) => state.auth.logIn);
  const [isActive, setIsActive] = useState(false);
  
  const hanldeSaveOnClick = () => {
    setIsActive(true);
    onclick(recipe);
  };

  return (
    <div className="recipe-card">
      {/* {console.log("recipeCard",recipe)} */}
      <CustomImage imgSrc={recipe.recipeImg} pt={"65%"} />
      <div className="recipe-card-info">
        {/* name chef */}
        <div>{recipe.user_id.name}</div>
        <div className="icon">
            <button
               onClick={hanldeSaveOnClick}
              //onClick={()=>recipe.handleFavouritesClick(recipe)}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="icon-heart"
                style={{
                  backgroundColor: isActive ? "salmon" : "blue",
                  color: isActive ? "white" : "",
                }}
              />
            </button>
          </div>

        {/* <img src={recipe.authorImg} className="auther-img" alt="abc" /> */}
        <p className="recipe-title">{recipe.recipeTitle}</p>
        <div className="recipe-time-person">
          <FontAwesomeIcon icon={faClock} className="clock" />
          {recipe.recipeClock}
          <FontAwesomeIcon icon={faUsers} className="users" />
          {recipe.recipeUser}
        </div>

        <p className="recipe-desc">
          {recipe.recipeDescription}
        </p>

       
       
        <Link to={`/recipePage/${recipe._id}`} className="btn btn-warning ms-2">
          <FontAwesomeIcon icon={faPenToSquare} />
          VIEW RECIPE
        </Link>

          {/* favorite ****************************************/}
          {logIn && <div style={{ width: "85%", margin: "1rem auto" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Favorite
                userForm={localStorage.getItem('userId')}
                recipeInfo={recipe}
              />
            </div>
          </div>}

        {/* <Link to={`/editrecipe/${recipe._id}`} className="btn btn-warning ms-2">
          <FontAwesomeIcon icon={faPenToSquare} />
          Edit
        </Link> */}
      </div>
    </div>
  );
};
export default RecipeCard1;
