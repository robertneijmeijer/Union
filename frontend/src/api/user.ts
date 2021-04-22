import ApiBase from "@/api/api-base";

export default class UserApi extends ApiBase {
  public static getUsers = (): Promise<any> => {
    return UserApi.requestGetAll("users")
      .then(response => response)
      .catch(error => error);
  };
}
