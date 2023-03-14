import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//=====================================================================

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const {token} =useParams();

  const onChangeInput = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post("/users/resetpassword/"+token, { password })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputpassword1" className="form-label">
          new password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputpassword1"
          aria-describedby="passwordHelp"
          onChange={onChangeInput}
          value={password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ResetPassword;
