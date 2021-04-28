import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";

export default class UserApi extends ApiBase {
  public static getUsers = (): Promise<any> => {
    return UserApi.requestGetAll("users")
      .then(response => response)
      .catch(error => error);
  };

  public static signIn = (data: any): Promise<AxiosResponse> => {
    return UserApi.requestPost("users/login", { data });
  };
}
