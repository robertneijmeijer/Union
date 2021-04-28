import ApiBase from "@/api/api-base";

export default class RegisterApi extends ApiBase {
  public static register = async (
    username: string,
    email: string,
    password: string
  ): Promise<any> => {
    return RegisterApi.requestPost("users/register", {
      data: { user: { username, email, password } },
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        throw error;
      });
  };
}
