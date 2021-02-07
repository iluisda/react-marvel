import md5 from "js-md5";
import env from "../environments/env";
const hash = md5.create();
hash.update(
  env.API_PARAMS.TS + env.API_PARAMS.PRIVATE_KEY + env.API_PARAMS.PUBLIC_KEY
);
const getHash = () => {
  return hash.hex();
};
export default getHash;
