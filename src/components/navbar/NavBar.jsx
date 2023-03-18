import React, { useState } from "react";
import SideBar from "./SideBar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import NavBarLink from "./NavLink";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authAction } from "../../store/auth";
//-======================================================
const Navigation = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const links = [
    {
      label: "Home",
      url: "/",
      icon: faHome,
    },
    {
      label: "AboutUs",
      url: "/aboutus",
      icon: faHome,
    },
    {
      label: "Recipes",
      url: "/recipes",
      icon: faList,
    },
    {
      label: "favorite",
      url: "/favorite",
      icon: faList,
    },
   
  ];

  let isChef = [
  {
    label: "MyRecipe",
    url: "/myRecipe",
  },
];

const connect = {
  isLogIn: [
    {
      label: "Logout",
      url: "/logout",
    },
  ],
  isLogOut: [
    {
      label: "Register",
      url: "/register",
    },
    {
      label: "Login",
      url: "/login",
    },
  ],
};

const history = useHistory();
  const dispatch = useDispatch();

  const loggin = useSelector((state) => state.auth.logIn);
  const userData = useSelector((state) => state.auth.userData);
  const userInfo = useSelector((state) => state.auth.userInfo);

  const logOut = () => {
    localStorage.clear();
    dispatch(authAction.logOut());
    history.push("/register");
  };

  function closeSidebar() {
    setShowSideBar(false);
  }

  return (
    <>
      <div className="navbar">
        <a href="#!" className="logo">
          F<span>oo</span>dhudies
        </a>

          {/* <div className="nav-link">
          {links.map((link) => (
            <a href="#!" key={link.label}>
              {link.label}
            </a>
          ))}
        </div>  */}

        <div className="nav-link">
          {links.map((link,index) => (
           
          <NavBarLink  key={index} link={link.url} label={link.label}/>
          ))}
           {userData && userData.isChef && isChef.map((item,idx)=>(
              <NavBarLink key={"chef"+idx} link={item.url} label={item.label}/>
            ))}
        </div> 

        {loggin ? (
            <NavDropdown title={userInfo.name} className="text-danger">
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown title="Connected">
              {connect.isLogOut.map((item, idx) => (
                <NavBarLink
                  key={"connectlogout" + idx}
                  link={item.url}
                  label={item.label}
                />
              ))}

            </NavDropdown>
          )}



        <div
          onClick={() => setShowSideBar(true)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <SideBar close={closeSidebar} links={links} />}
    </>
  );
};

export default Navigation;




// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import NavBarLink from "./NavLink";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { authAction } from "../../store/auth";

// //==========================================================
// const links = [
//   {
//     label: "Home",
//     url: "/",
//   },
//   {
//     label: "AboutUs",
//     url: "/aboutus",
//   },
//   {
//     label: "Recipes",
//     url: "/recipes",
//   },
//   {
//     label: "favorite",
//     url: "/favorite",
//   },

// ];

// let isChef = [
//   {
//     label: "MyRecipe",
//     url: "/myRecipe",
//   },
// ];

// const connect = {
//   isLogIn: [
//     {
//       label: "Logout",
//       url: "/logout",
//     },
//   ],
//   isLogOut: [
//     {
//       label: "Register",
//       url: "/register",
//     },
//     {
//       label: "Login",
//       url: "/login",
//     },
//   ],
// };

// // //=============================================================================
// const Navigation = () => {
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const loggin = useSelector((state) => state.auth.logIn);
//   const userData = useSelector((state) => state.auth.userData);
//   const userInfo = useSelector((state) => state.auth.userInfo);

//   const logOut = () => {
//     localStorage.clear();
//     dispatch(authAction.logOut());
//     history.push("/register");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav ">
//             {links.map((item, idx) => (
//               <NavBarLink
//                 key={"links" + idx}
//                 link={item.url}
//                 label={item.label}
//               />
//             ))}
//             {userData && userData.isChef && isChef.map((item,idx)=>(
//               <NavBarLink key={"chef"+idx} link={item.url} label={item.label}/>
//             ))}
//           </ul>
//         </div>

//         <div>
//           {loggin ? (
//             <NavDropdown title={userInfo.name} className="text-danger">
//               <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
//             </NavDropdown>
//           ) : (
//             <NavDropdown title="Connected">
//               {connect.isLogOut.map((item, idx) => (
//                 <NavBarLink
//                   key={"connectlogout" + idx}
//                   link={item.url}
//                   label={item.label}
//                 />
//               ))}

//             </NavDropdown>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
