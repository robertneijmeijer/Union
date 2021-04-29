import ApiBase from "@/api/api-base";
import { UsernameEmailValidationInterface } from "@/actions/user";

export default class UserApi extends ApiBase {
  public static getUsers = (): Promise<any> => {
    return UserApi.requestGetAll("users")
      .then(response => response)
      .catch(error => error);
  };

  public static validateUsernameEmail = (
    values: UsernameEmailValidationInterface
  ): Promise<any> => {
    return UserApi.requestPost("users/validate", { data: values })
      .then(response => response)
      .catch(error => {
        throw error;
      });
  };
}
