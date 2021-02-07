import env from "../environments/env";
import PARAMS from '../utils/globalParams';
import axios from "axios";

const getCharacters = () => {
  return axios.get(`${env.BASE_URL + env.API_VERSION + env.CHARACTER}`, { params: PARAMS });
};
export default getCharacters;
