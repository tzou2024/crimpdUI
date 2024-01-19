import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/v1/auth/";

export const register = (username: string, email: string, pwd: string) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    pwd,
  });
};

export const login = (username: string, pwd: string) => {
  return axios
    .post(API_URL + "login", {
      username,
      pwd,
    })
    .then((response) => {
      // localStorage.setItem("user", JSON.stringify("+" + response.data.accessToken))
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    });
};
export const logout = () => {
  axios
  .post(API_URL + "logout/access", {}, {headers: authHeader()}
  )
  .then((response) => {
    // localStorage.setItem("sus", String(response))
    console.log(response)
    return
  }).catch(err => {
    // localStorage.setItem("unsus", err)
    console.log(err)
    return

  }).then(() => {
    //at least remove the token the front end either way
    localStorage.removeItem("user")
    return
  });
  // return
  // localStorage.removeItem("user")
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};