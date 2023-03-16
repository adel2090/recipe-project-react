import "./RecipeCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUsers,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
//===============================================
const RecipeCard = ({
  img,
  title,
  clock,
  users,
  numStar,
  description,
  alt,
  id,
  recipe,
  onclick,
}) => {
  const [isActive, setIsActive] = useState(false);
  const hanldeSaveOnClick = () => {
    setIsActive(true);
    onclick(recipe);
  };

  return (
    <div className="col">
      <div className="card">
        <div className="header">
          <img src={img} className="card-img-top" alt={alt} />
          <div className="icon">
          
            {/* <a href="#">
              <FontAwesomeIcon icon={faHeart} className="icon-heart" />
              <i className="fa fa-heart-o" />
            </a> */}
          </div>
        </div>
        <div className="text">
          <h1 className="food">{title}</h1>
          <FontAwesomeIcon icon={faClock} className="clock" />
          {clock}
          <FontAwesomeIcon icon={faUsers} className="users" />
          {users}
          {/* <i className="fa fa-clock-o"> 15 Mins</i> */}
          {/* <i className="fa fa-users"> Serves 2</i> */}
          <div className="stars">
            <div className="star-group">
              <a href="#">
                <FontAwesomeIcon icon={faStar} className="star" />
                {/* <i className="fa fa-star" /> */}
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faStar} className="star" />
                {/* <i className="fa fa-star" /> */}
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faStar} className="star" />
                {/* <i className="fa fa-star" /> */}
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faStar} className="star" />
                {/* <i className="fa fa-star" /> */}
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faStar} className="star" />
                {/* <i className="fa fa-star-o" /> */}
              </a>
            </div>
          </div>
          <p className="info">{description}</p>
        </div>
        {/* <button className="btn btn-warning"> Let's Cook!</button> */}
        <Link to={`/recipepage`} className="btn btn-warning">
          Let's Cook!
        </Link>
        {/* <a href="#" className="btn">
          Let's Cook!
        </a> */}
      </div>
    </div>
  );
};
export default RecipeCard;
