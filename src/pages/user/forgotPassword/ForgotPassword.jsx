import React, { useState } from "react";
import axios from "axios";
//=====================================================
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChangeInput = (ev) => {
    setEmail(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post("/users/forgotpassword", { email })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error from forgot password: ", error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={onChangeInput}
          value={email}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ForgotPassword;
