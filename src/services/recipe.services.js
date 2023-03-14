import axios from "axios";

// /api/recipes/recipes
const getAllRecipe = () => {
  return axios.get(`/recipes/recipes`);
};


//info card
// /api/recipes/recipe/321321315
const getRecipe = (recipeId) => {
  return axios.get(`/recipes/recipe/${recipeId}`);
};

// To receive all recipes of the registered user
const getMyRecipe = () => {
  return axios.get("/recipes/myRecipes");
}


const createRecipe = (recipe) => {
  return axios.post("/recipes/", recipe);
};

// edit card
const editRecipe = (recipe,id) => {
  const recipeId = id;
  //delete recipe._id;
  return axios.patch(`/recipes/${recipeId}`, recipe);
};

//delete card
const deleteRecipe = (recipeId) => {
  return axios.delete(`/recipes/${recipeId}`);
};

;

//create recipe


export { getAllRecipe,createRecipe, getMyRecipe, getRecipe, editRecipe, deleteRecipe };
