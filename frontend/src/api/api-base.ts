import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class ApiBase {
  private static BASE_URL = "http://127.0.0.1:8000"; // TODO: Replace with env var

  protected static async executeRequest<T = any>(
    method: "get" | "delete" | "post" | "put",
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const response = await axios.request({
      method,
      url: `${this.BASE_URL}${url}`,
      withCredentials: true,
      ...config,
    });
    return response;
  }

  protected static async executeRequestWithHeaders<T = any>(
      method: "get" | "delete" | "post" | "put",
      url: string,
      config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const headers = {
        'Content-Type' : 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    }
    if(config) {
      config.headers = headers
      console.log(config.headers)
    }
    const response = await axios.request({
      method,
      url: `${this.BASE_URL}${url}`,
      withCredentials: true,
      ...config,
    });
    return response;
  }

  public static async requestGet<T = any>(
    resource: string,
    id: string,
    config?: AxiosRequestConfig
  ) {
    return this.executeRequest<T>("get", `/${resource}/${id}`, {
      ...config,
    });
  }

  public static async requestGetAll<T = any>(
    resource: string,
    config?: AxiosRequestConfig
  ) {
    return this.executeRequest<T>("get", `/${resource}`, {
      ...config,
    });
  }

  public static async requestPost<T = any>(
    resource: string,
    config?: AxiosRequestConfig
  ) {
    return this.executeRequest<T>("post", `/${resource}`, {
      ...config,
    });
  }

  public static async requestPostWithHeaders<T = any>(
      resource: string,
      config?: AxiosRequestConfig,
  ) {
    return this.executeRequestWithHeaders<T>("post", `/${resource}`, {
      ...config,
    });
  }
}
