import "./Register.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import validate from "../../../validation/validation";
import registerSchema from "../../../validation/register.validation";

//=======================================================

const Register = () => {
  const history = useHistory();

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    isChef: false,
  });

  const [formErrors, setFormErrors] = useState({});
 

  const handleUserInputChange = (ev) => {
    //deep copy
    let copyUserInput = JSON.parse(JSON.stringify(userInput));
    // const { id, value } = ev.target;
    // copyUserInput[id] = value;
    copyUserInput[ev.target.id] = ev.target.value;
    setUserInput(copyUserInput);
  };

  const handleCheckBoxInputChange = (ev) => {
    let copyUserInput = JSON.parse(JSON.stringify(userInput));
    if (copyUserInput.hasOwnProperty(ev.target.id)) {
      copyUserInput[ev.target.id] = ev.target.checked;
      setUserInput(copyUserInput);
    }
  };

  const handleSubmitRegister = (ev) => {
    ev.preventDefault();
    const { error } = validate(userInput, registerSchema);
    setFormErrors(validateError(userInput));
    
    //post api
    axios
      .post("/users/register", userInput)
      .then((res) => {
        toast.success("A new account is opened!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        history.push("/login");
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

  

  const validateError = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "UserName is requried!";
    }
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

  return (
    <div className="container_register">
      <div className="screen_register">
        <div className="screen__content_register">
          <form className="register" onSubmit={handleSubmitRegister}>
            

            {/* --------------------------- */}
            <div className="register__field">
              <i className="register__icon fas fa-user" />

              <input
                type="text"
                className="register__input"
                id="name"
                placeholder="name"
                value={userInput.name}
                onChange={handleUserInputChange}
                
              />

              <p className="text-danger">{formErrors.name}</p>
            </div>

            <div className="register__field">
              <i className="register__icon fas fa-user" />
              
                <input
                  type="text"
                  className="register__input"
                  id="email"
                  placeholder="name@example.com"
                  value={userInput.email}
                  onChange={handleUserInputChange}
                  
                />
              
              <p className="text-danger">{formErrors.email}</p>
            </div>

            <div className="register__field">
              <i className="register__icon fas fa-user" />
              
                <input
                  type="password"
                  className="register__input"
                  id="password"
                  placeholder="password"
                  value={userInput.password}
                  onChange={handleUserInputChange}
                 
                />
             
              <p className="text-danger">{formErrors.password}</p>
            </div>

            <div className="register__field">
              <i className="register__icon fas fa-user" />
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="isChef"
                  checked={userInput.isChef}
                  onChange={handleCheckBoxInputChange}
                />
                <label className="form-check-label" htmlFor="isChef">
                  Are you chef?
                </label>
              </div>
            </div>

            <button type="submit" className="button register__submit">
              <span className="button__text">Register</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
       
          </form>
        </div>
        <div className="screen__background_register">
          <span className="screen__background__shape_register screen__background__shape4_register" />
          <span className="screen__background__shape_register screen__background__shape3_register" />
          <span className="screen__background__shape_register screen__background__shape2_register" />
          <span className="screen__background__shape_register screen__background__shape1_register" />
        </div>
      </div>
    </div>
  );
};
export default Register;
