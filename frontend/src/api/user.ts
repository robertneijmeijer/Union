import ApiBase from "@/api/api-base";
import { UsernameEmailInterface } from "@/actions/user";
import { AxiosResponse } from "axios";

export type UserType = {
  user_id?: number;
  username: string;
  email: string;
  avatar?: string;
};

export default class UserApi extends ApiBase {
  public static getUsers = (): Promise<UserType[]> => {
    return UserApi.requestGetAll("users")
      .then(response => response)
      .catch(error => error);
  };

  public static validateUsernameEmail = (
    values: UsernameEmailInterface
  ): Promise<any> => {
    return UserApi.requestPost("users/validate", { data: values })
      .then(response => response)
      .catch(error => {
        throw error;
      });
  };

  public static signIn = (
    data: UsernameEmailInterface
  ): Promise<AxiosResponse> => {
    return UserApi.requestPost("users/login", { data })
      .then(response => response)
      .catch(error => {
        throw error;
      });
  };

  public static getUser = (): Promise<AxiosResponse<UserType>> => {
    return UserApi.executeRequest("get", "/users/current")
      .then(response => response)
      .catch(error => {
        throw error;
      });
  };
}
