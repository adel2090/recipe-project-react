// import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Navigation from "../src/components/navbar/NavBar";
import Home from "./pages/home/Home";

import AboutUs from "./pages/aboutUs/AboutUs";
import Register from "./pages/user/register/Register";
import Login from "./pages/user/login/Login";
import ForgotPassword from "./pages/user/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/user/resetPassword/ResetPassword";
import useAutoLogin from "./hooks/useAutoLogin";

import CreateRecipe from "./pages/recipe/CreateRecipe";

import ProtectedRoute from "./components/common/ProtectedRoute";
import EditRecipe from "./pages/recipe/EditRecipe";
import MyRecipe from "./pages/recipe/MyRecipe";
import RecipePage from "./pages/recipe/RecipePage";

import FavoritePage from "./pages/recipe/favourites/FavoritePage";

import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";

import Recipes from "./pages/Recipes/Recipes";
import DeleteRecipe from "./pages/recipe/DeleteRecipe";
import { useSelector } from "react-redux";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import HeroSection from "./components/homePage/HeroSection";

//======================================================================
const App = () => {
  const autoLoginFunction = useAutoLogin();
  const loading = useSelector((state) => state.auth.loading);
  useEffect(() => {
    (async () => {
      try {
        await autoLoginFunction(localStorage.getItem("token"));
      } catch (error) {}
    })();
  }, []);

  return (
    <div >
      <Navigation />
      <div className="container main">
        <ToastContainer />
        {!loading && (
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/aboutus" component={AboutUs}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/forgotpassword" component={ForgotPassword}></Route>
            <Route
              path="/resetpassword/:token"
              component={ResetPassword}
            ></Route>
            <Route path="/recipes" component={Recipes} />
            <Route path="/favorite" component={FavoritePage} />
            <Route path="/recipePage/:id" component={RecipePage} />
            <ProtectedRoute path="/createrecipe" component={CreateRecipe} />
            <ProtectedRoute path="/editrecipe/:id" component={EditRecipe} />
            <ProtectedRoute path="/deleteRecipe/:id" component={DeleteRecipe} />
            <ProtectedRoute path="/myRecipe" component={MyRecipe} />
          </Switch>
        )}{" "}
      </div>
      <Footer />
    </div>
  );
};

export default App;
