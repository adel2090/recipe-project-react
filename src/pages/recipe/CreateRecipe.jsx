import { useState } from "react";
import { Fragment } from "react";
import validate from "../../validation/validation";
import recipeSchema from "../../validation/recipe.validation";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { createRecipe } from "../../services/recipe.services";

//===============================================================================
const CreateRecipe = () => {
  const history = useHistory();

  const [userInputRecipe, setUserInputRecipe] = useState({
    recipeTitle: "",
    recipeImg: "",
    recipeDescription: "",
    recipeClock: "",
    recipeUser: "",
    recipeType: "",
    recipeLevel: "",
    recipeIngredients: "",
    recipePreparation: "",
  });

  const handleUserInputRecipeChange = (ev) => {
    let copyUserInputRecipe = JSON.parse(JSON.stringify(userInputRecipe));
    copyUserInputRecipe[ev.target.id] = ev.target.value;
    setUserInputRecipe(copyUserInputRecipe);
  };

  const handleCreateRecipeSubmit = async (ev) => {
    ev.preventDefault();
   
    //validation
    const { error } = validate(userInputRecipe, recipeSchema);
    console.log("error validation:", { error });
    if (error) {
      let massageError = "";
      for (let itemError of error.details) {
        switch (itemError.type) {
          case "string.min":
            massageError += `${itemError.context.label} length must be at least ${itemError.context.limit} characters long`;
            break;
          case "string.max":
            massageError += `${itemError.context.label} length must be less than or equal to ${itemError.context.limit} characters long`;
            break;
          default:
            massageError += "massage error dont have type";
            break;
        }
      }
      console.log("massage error type:", massageError);
    }
    try {
      let data=await createRecipe(userInputRecipe);
      console.log("data from create recipe",data);
      toast.success("A new recipe is created!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      history.push("/recipes");
    } catch (error) {
      toast.error("Create Recipe is failed", {
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

    
  };

  return (
    <Fragment>
      <form onSubmit={handleCreateRecipeSubmit}>
        <h1>Create your recipe</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeTitle"
            placeholder="recipeTitle"
            value={userInputRecipe.recipeTitle}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipeTitle">title</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeImg"
            placeholder="recipeImg"
            value={userInputRecipe.recipeImg}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipeImg">img url</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeDescription"
            placeholder="recipeDescription"
            value={userInputRecipe.recipeDescription}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipeDescription">description</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeClock"
            placeholder="recipeClock"
            value={userInputRecipe.recipeClock}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipeClock">clock</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeUser"
            placeholder="recipeUser"
            value={userInputRecipe.recipeUser}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipeUser">user</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeType"
            placeholder="recipeType"
            value={userInputRecipe.recipeType}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipeType">type</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeLevel"
            placeholder="recipeLevel"
            value={userInputRecipe.recipeLevel}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipeLevel">level</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeIngredients"
            placeholder="recipeIngredients"
            value={userInputRecipe.recipeIngredients}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipeIngredients">ingredients</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipePreparation"
            placeholder="recipePreparation"
            value={userInputRecipe.recipePreparation}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipePreparation">preparation</label>
        </div>

        <button className="btn btn-info">Create Recipe</button>
      </form>
    </Fragment>
  );
};

export default CreateRecipe;
