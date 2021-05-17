import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";

axios.interceptors.request.use(
  function(config: AxiosRequestConfig) {
    if (
      !config.url ||
      config.url?.indexOf("register") > -1 ||
      config.url?.indexOf("login") > -1 ||
      config.url?.indexOf("unions/invite") > -1
    )
      return config;

    console.log("COOKIE");
    console.log(Cookie.get("Authorization"));

    config.headers = {
      Authorization: Cookie.get("Authorization"),
    };
    // TODO add redirect to login when cookie is null
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
