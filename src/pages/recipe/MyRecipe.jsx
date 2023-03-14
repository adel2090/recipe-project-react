import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getMyRecipe } from "../../services/recipe.services";
import { toast } from "react-toastify";
import RecipeCard1 from "../../components/recipeCard/RecipeCard1";
import RecipeList1 from "./recipesList/RecipeList1";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUsers,
  faStar,
  faHeart,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";


//================================================================
let recipeArray = [];

const MyRecipe = () => {

  const userData = useSelector((state) => state.auth.userData);
  useEffect(()=>{
    console.log("userData.id",userData.id);
  },[userData])
  //console.log("userData",userData.id);
 

  const [recipe, setRecipe] = useState(recipeArray);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await getMyRecipe();
        //console.log(data);
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

  // return recipe && <RecipeCard1 recipe={recipe} />;
  return (
    recipe && (
      <Fragment>
          <Link to={`/createrecipe`} className="btn btn-warning ms-2">
          <FontAwesomeIcon icon={faPenToSquare} />
          create recipe
        </Link> 
        <RecipeList1 recipes={recipe} />;
      </Fragment>
    )
  );
};

export default MyRecipe;
