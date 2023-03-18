import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
//===================================================================

const ChefCard = ({ chef }) => {
  return (
    <div className="chief-card">
      <div className="chief-card-image">
        <img src={chef.img} alt={chef.name} />
      </div>

      <div className="chief-card-info">
        <h3 className="chief-card-name">{chef.name}</h3>
        <p className="chief-recipe-count">
          Recipes:<b>{chef.recipeCount}</b>
        </p>
        <p className="chief-cuisine">
          Cuisine:<b>{chef.cuisine}</b>
        </p>
        <p className="chief-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
};

export default ChefCard;
