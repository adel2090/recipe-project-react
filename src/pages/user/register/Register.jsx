import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
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
  const [isSubmit, setIsSubmit] = useState(false);

  const handleUserInputChange = (ev) => {
    //deep copy
    let copyUserInput = JSON.parse(JSON.stringify(userInput));
    const { id, value } = ev.target;
    copyUserInput[id] = value;
    //copyUserInput[ev.target.id] = ev.target.value;
    setUserInput(copyUserInput);
  };

  const handleCheckBoxInputChange=(ev)=>{
    let copyUserInput = JSON.parse(JSON.stringify(userInput));
    if(copyUserInput.hasOwnProperty(ev.target.id)){
      copyUserInput[ev.target.id] = ev.target.checked;
      setUserInput(copyUserInput);
    }
  }

  const handleSubmitRegister = (ev) => {
    ev.preventDefault();
    setFormErrors(validate(userInput));
    setIsSubmit(true);
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

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userInput);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message succsess">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(userInput, undefined, 2)}</pre>
      )}
      <form onSubmit={handleSubmitRegister}>
        <h1>Register</h1>

        {/* --------------------------- */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            value={userInput.name}
            onChange={handleUserInputChange}
            required
          />
          <label htmlFor="name">UserName</label>
        </div>
        <p className="text-danger">{formErrors.name}</p>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={userInput.email}
            onChange={handleUserInputChange}
            required
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
            required
          />
          <label htmlFor="password">password</label>
        </div>
        <p className="text-danger">{formErrors.password}</p>

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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
