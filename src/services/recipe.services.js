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

//create recipe
const createRecipe = (recipe) => {
  return axios.post("/recipes/", recipe);
};

// edit recipe
const editRecipe = (recipe,id) => {
  const recipeId = id;
  return axios.patch(`/recipes/${recipeId}`, recipe);
};

//delete recipe
const deleteRecipe = (recipeId) => {
  return axios.delete(`/recipes/${recipeId}`);
};

;




export { getAllRecipe,createRecipe, getMyRecipe, getRecipe, editRecipe, deleteRecipe };
