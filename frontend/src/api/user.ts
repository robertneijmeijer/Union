import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";
import { LoginFormInterface } from "@/actions/user";

export type UserType = {};

export default class UserApi extends ApiBase {
  public static getUsers = (): Promise<UserType[]> => {
    return UserApi.requestGetAll("users")
      .then(response => response)
      .catch(error => error);
  };

  public static signIn = (data: LoginFormInterface): Promise<AxiosResponse> => {
    return UserApi.requestPost("users/login", { data })
      .then(response => response)
      .catch(error => {
        throw error;
      });
  };
}
