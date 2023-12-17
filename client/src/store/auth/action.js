import axios from "axios";

const LOCAL_URL = "http://localhost:3001/";

export const handleRegister = (data) => {
  return async (dispatch) => {
    axios
      .post(`${LOCAL_URL}register`, data)
      .then((response) => {
        console.log("RESPONSE -->", response);
      })
      .catch((err) => {
        console.log("ERROR-->", err);
      });
  };
};

export const handleLogin = (data) => {
  return async (dispatch) => {
    axios
      .post(`${LOCAL_URL}login`, data)
      .then((response) => {
        console.log("login RESPONSE -->", response);
      })
      .catch((err) => {
        console.log("login ERROR-->", err);
      });
  };
};
