import ApiBase from "@/api/api-base";
import { UsernameEmailInterface } from "@/actions/user";
import { AxiosResponse } from "axios";

export default class UserApi extends ApiBase {
  public static getUsers = (): Promise<any> => {
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

  public static signIn = (data: UsernameEmailInterface): Promise<AxiosResponse> => {
    return UserApi.requestPost("users/login", { data })
      .then(response => response)
      .catch(error => {
        throw error;
      });
  };
}
