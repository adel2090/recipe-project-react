import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { deleteRecipe } from "../../services/recipe.services";
//====================================================
const DeleteRecipe = () => {
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      await deleteRecipe(`${id}`);
      history.push("/myRecipe");
    })();
  }, []);

  return <div>Delete Recipe</div>;
};

export default DeleteRecipe;
