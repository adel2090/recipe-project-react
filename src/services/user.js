import axios from "axios";

const user = () => {
  return axios.get("/users/userInfo");
};

export default user;
