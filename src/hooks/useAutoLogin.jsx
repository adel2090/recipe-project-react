import { useEffect } from "react";
import user from "../services/user";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";
//==========================================

const useAutoLogin = () => {
  const dispatch = useDispatch();

  const autoLogin = async (token) => {
    try {
      let { data } = await user(); // userInfo
      let dataFromToken = jwt_decode(token);
      localStorage.setItem("userId", data._id);
      if (data ) {
        dispatch(authAction.login(dataFromToken));
        dispatch(authAction.updateUserInfo(data));
        return true;
      }
      
    } catch (error) {
      //console.log("you not loggin");
      return false;
    }
  };

  return autoLogin;
};
export default useAutoLogin;
