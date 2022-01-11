import axios from "axios";
import header from "./header";

const API_URL = "http://localhost:8080/api/display/";

const getPublicDisplay = () => {
  return axios.get(API_URL + "all");
};

const getUserDisplay = () => {
  return axios.get(API_URL + "user", { headers: header() });
};


const getAdminDisplay = () => {
  return axios.get(API_URL + "admin", { headers: header() });
};

export default {
  getPublicDisplay,
  getUserDisplay,
  getAdminDisplay,
};