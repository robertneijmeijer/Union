import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class ApiBase {
  private static BASE_URL = "http://127.0.0.1:8000"; // TODO: Replace with env var

  protected static executeRequest(
    method: "get" | "delete" | "post" | "put",
    url: string,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return axios
      .request({
        method,
        url: `${this.BASE_URL}${url}`,
        withCredentials: true,
        ...config,
      })
      .then(response => response)
      .catch(handleError);
  }

  public static async requestGet(
    resource: string,
    id: string,
    config?: AxiosRequestConfig
  ) {
    return this.executeRequest("get", `/${resource}/${id}`, { ...config });
  }

  public static async requestGetAll(
    resource: string,
    config?: AxiosRequestConfig
  ) {
    return this.executeRequest("get", `/${resource}`, { ...config });
  }

  public static async requestPost(
    resource: string,
    config?: AxiosRequestConfig
  ) {
    return this.executeRequest("post", `/${resource}`, { ...config });
  }
}

const handleError = (error: any) => {
  if (error.data) {
    return error.data;
  }

  return error;
};
