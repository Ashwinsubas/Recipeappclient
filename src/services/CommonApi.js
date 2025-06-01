import axios from "axios";
import { baseURL } from "./ServerUrl";

const CommonApi = async (httpMethod, endPoint, reqBody) => {
  const reqObj = {
    method: httpMethod,
    url: baseURL + endPoint,
    data: reqBody,
  };

  return await axios(reqObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default CommonApi;