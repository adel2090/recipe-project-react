import React from "react";

const RecipeHeading = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default RecipeHeading;
