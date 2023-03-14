import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavBarLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { authAction } from "../../store/auth";
import { useEffect } from "react";
//==========================================================
const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "AboutUs",
    url: "/aboutus",
  },
  {
    label: "AppRecipes",
    url: "/appRecipes",
  },
  {
    label: "Favourites",
    url: "/favourites",
  },

];

let isChef = [
  {
    label: "MyRecipe",
    url: "/MyRecipe",
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


const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const loggin = useSelector((state) => state.auth.logIn);
  const userData = useSelector((state) => state.auth.userData);
  const userInfo = useSelector((state) => state.auth.userInfo);

  useEffect(()=>{
    console.log("userInfo",userInfo);
  },[userInfo])

  const logOut = () => {
    localStorage.clear();
    dispatch(authAction.logOut());
    history.push("/register");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            {links.map((item, idx) => (
              <NavBarLink
                key={"links" + idx}
                link={item.url}
                label={item.label}
              />
            ))}
            {userData && userData.isChef && isChef.map((item,idx)=>(
              <NavBarLink key={"chef"+idx} link={item.url} label={item.label}/>
            ))}
          </ul>
        </div>

        {/* <div>
          {loggin
            ? connect.isLogIn.map((item) => (
                <Fragment>
                
                  <button
                    key={"login" + userName._id}
                    type="button"
                    className="btn btn-danger"
                    onClick={logOut}
                  >
                    {item.label}
                  </button>
                </Fragment>
              ))
            : connect.isLogOut.map((item, idx) => (
                <Fragment>
                  <button
                    key={"logout" + idx}
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      history.push(item.url);
                    }}
                  >
                    {item.label}
                  </button>
                </Fragment>
                
              ))}
        </div> */}

        <div>
          {loggin ? (
            <NavDropdown title={userInfo.name} className="text-danger">
              {/* {connect.isLogIn.map((item, idx) => (
                <NavBarLink
                  key={"connectLogIn" + idx}
                  link={item.url}
                  label={item.label}
                  onClick={logOut}
                />
              ))} */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
