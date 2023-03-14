import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../src/components/navbar/NavBar";
import Home from "./pages/home/Home";

import AboutUs from "./pages/aboutUs/AboutUs";
import Register from "./pages/user/register/Register";
import Login from "./pages/user/login/Login";
import ForgotPassword from "./pages/user/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/user/resetPassword/ResetPassword";
import useAutoLogin from "./hooks/useAutoLogin";
import AppRecipes from "./components/appRecipes/AppRecipes";
import Favourites from "./pages/recipe/favourites/Favourites";
import CreateRecipe from "./pages/recipe/CreateRecipe";
import { editRecipe } from "./services/recipe.services";
import ProtectedRoute from "./components/common/ProtectedRoute";
import EditRecipe from "./pages/recipe/EditRecipe";
import MyRecipe from "./pages/recipe/MyRecipe";
import RecipePage from "./pages/recipe/RecipePage";

//======================================================================
const App = () => {
  const autoLoginFunction = useAutoLogin();
  useEffect(() => {
    (async () => {
      try {
        await autoLoginFunction(localStorage.getItem("token"));
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/aboutus" component={AboutUs}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/forgotpassword" component={ForgotPassword}></Route>
        <Route path="/resetpassword/:token" component={ResetPassword}></Route>
        <Route path="/appRecipes" component={AppRecipes} />
        <Route path="/createrecipe" component={CreateRecipe} />

        <Route path="/editrecipe/:id" component={EditRecipe} />

        <Route path="/favourites" component={Favourites} />
        <Route path="/recipePage/:id" component={RecipePage} />
        <Route path="/myRecipe" component={MyRecipe} />
      </Switch>
    </div>
  );
};

export default App;
