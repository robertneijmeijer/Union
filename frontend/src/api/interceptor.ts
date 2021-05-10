import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";

axios.interceptors.request.use(
  function(config: AxiosRequestConfig) {
    if (
      !config.url ||
      config.url?.indexOf("register") > -1 ||
      config.url?.indexOf("login") > -1
    )
      return config;
    config.headers = {
      Authorization: `Token ${Cookie.get("Authorization")}`,
    };
    return config;
  },
  function(error) {
    console.error(`REQUEST: ${error}`);
    return Promise.reject(error);
  }
);
