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
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";
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
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      //console.log("response", response);
      if (response) {
        const userDocRef = await createUserDocFromAuth(response.user);
      }
    })();
  }, []);

  //sign-in with google popup
  const logGoogleUser = async () => {
    //console.log("here");
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocFromAuth(user);
    //console.log("userDocRef from login", userDocRef);
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message succsess">logined in successfully</div>
      ) : (
        <pre>{JSON.stringify(userInput, undefined, 2)}</pre>
      )}
      <form onSubmit={handleSubmitLogin}>
        <h1>Login</h1>
        {/* --------------------------- */}

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={userInput.email}
            onChange={handleUserInputChange}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <p className="text-danger">{formErrors.email}</p>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            value={userInput.password}
            onChange={handleUserInputChange}
          />
          <label htmlFor="password">password</label>
        </div>
        <p className="text-danger">{formErrors.password}</p>

        <button type="submit" className="btn btn-primary" disabled={btnSub}>
          Submit
        </button>

        <button onClick={logGoogleUser}>signIn with Google</button>
        <button onClick={signInWithGoogleRedirect}>signIn with Redirect</button>
      </form>
    </div>
  );
};
export default Login;
