import { NavLink } from "react-router-dom";

const NavBarLink = ({ link, label }) => {
  return (
    
    <div className="a">

       <NavLink
        to={link}
        activeStyle={{
          color: "red",
        }}
      >
        {label}
      </NavLink>
    </div>
    // <li className="nav-item m-3">
    //   <NavLink
    //     to={link}
    //     activeStyle={{
    //       color: "red",
    //     }}
    //   >
    //     {label}
    //   </NavLink>
    // </li>
  );
};

export default NavBarLink;
