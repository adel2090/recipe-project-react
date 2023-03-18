import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import validate from "../../validation/validation";
import recipeSchema from "../../validation/recipe.validation";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { getRecipe, editRecipe } from "../../services/recipe.services";
import { useParams } from "react-router-dom";

const EditRecipe = () => {
  const history = useHistory();

  const [recipeData, setRecipeData] = useState({
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

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await getRecipe(`${id}`);
        
        setRecipeData({
          recipeTitle: data.recipeTitle,
          recipeImg: data.recipeImg,
          recipeDescription: data.recipeDescription,
          recipeClock: data.recipeClock,
          recipeUser: data.recipeUser,
          recipeType: data.recipeType,
          recipeLevel: data.recipeLevel,
          recipeIngredients: data.recipeIngredients,
          recipePreparation: data.recipePreparation,
        });
      } catch (error) {
        toast.error("Update Recipe is failed", {
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

  const handleUserInputRecipeChange = (ev) => {
    let copyUserInputRecipe = JSON.parse(JSON.stringify(recipeData));
    copyUserInputRecipe[ev.target.id] = ev.target.value;
    setRecipeData(copyUserInputRecipe);
  };

  const handleEditRecipeSubmit = async (ev) => {
    ev.preventDefault();
    //validation
    const { error } = validate(recipeData, recipeSchema);
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
      await editRecipe(recipeData,`${id}`);
      toast.success("The recipe is Update!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      history.push("/myRecipe");
    } catch (error) {
      toast.error("Update Recipe is failed", {
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
      <form onSubmit={handleEditRecipeSubmit}>
        <h1>Update your recipe</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeTitle"
            placeholder="recipeTitle"
            value={recipeData.recipeTitle}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipeTitle">recipeTitle</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeImg"
            placeholder="recipeImg"
            value={recipeData.recipeImg}
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
            value={recipeData.recipeDescription}
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
            value={recipeData.recipeClock}
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
            value={recipeData.recipeUser}
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
            value={recipeData.recipeType}
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
            value={recipeData.recipeLevel}
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
            value={recipeData.recipeIngredients}
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
            value={recipeData.recipePreparation}
            onChange={handleUserInputRecipeChange}
          />
          <label htmlFor="recipePreparation">preparation</label>
        </div>

        <button className="btn btn-info">Update Recipe</button>
      </form>
    </Fragment>
  );
};

export default EditRecipe;
