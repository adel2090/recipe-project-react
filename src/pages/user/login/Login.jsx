import "./Login.css";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../../store/auth";
import jwt_decode from "jwt-decode";
import user from "../../../services/user";
import useAutoLogin from "../../../hooks/useAutoLogin";
import validate from "../../../validation/validation";
import loginSchema from "../../../validation/login.validation";

//====================================================

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const autoLoginFunction = useAutoLogin();

  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [btnSub, setBtnSub] = useState(false);

  const handleUserInputChange = (event) => {
    const copyUserInput = JSON.parse(JSON.stringify(userInput));
    copyUserInput[event.target.id] = event.target.value;
    setUserInput(copyUserInput);
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const { error } = validate(userInput, loginSchema);
    //console.log("error", error);
    setFormErrors(validateError(userInput));
    setIsSubmit(true);
    //post api
    axios
      .post("/users/login", userInput)
      .then(async (res) => {
        //console.log("jwt", jwt_decode(res.data.token));
        //console.log(res);
        localStorage.setItem("token", res.data.token);
        autoLoginFunction(res.data.token);
        history.push("/");
      })
      .catch((err) => {
        toast.error("register is failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  useEffect(() => {
    //console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log(userInput);
      //setBtnSub(true);
    }
  }, [formErrors]);

  const validateError = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is requried!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is requried!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  //===============================================

  {
    /* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message succsess">logined in successfully</div>
      ) : (
        <pre>{JSON.stringify(userInput, undefined, 2)}</pre>
      )} */
  }

  return (
    <div className="container1">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmitLogin}>
            <h1>Login</h1>
            {/* --------------------------- */}

            <div className="login__field">
            <i className="login__icon fas fa-user" />
              
                <input
                  type="email"
                  className="login__input"
                  id="email"
                  placeholder="name@example.com"
                  value={userInput.email}
                  onChange={handleUserInputChange}
                />
                
              <p className="text-danger">{formErrors.email}</p>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
            
                <input
                  type="password"
                  className="login__input"
                  id="password"
                  placeholder="password"
                  value={userInput.password}
                  onChange={handleUserInputChange}
                />
             
              <p className="text-danger">{formErrors.password}</p>
            </div>

            <button
              type="submit"
              className="button login__submit"
              disabled={btnSub}
            >
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
};
export default Login;
