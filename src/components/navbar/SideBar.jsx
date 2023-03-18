import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarLink from "./NavLink";
const SideBar = ({ links, close }) => {
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link, index) => (
      
      <NavBarLink className='sidebar-link' key={index} link={link.url} label={link.label} />
        

        // <a className='sidebar-link' href="#!" key={link.label} >
        //     <FontAwesomeIcon icon={link.icon}/>
        //     {link.label}
        //     </a>
      ))}
    </div>
  );
};

export default SideBar;
