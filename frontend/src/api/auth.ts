import ApiBase from "@/api/api-base";
import {RegistrationFormInterface} from "@/actions/user";

export default class RegisterApi extends ApiBase {
  public static register = async (
    values: RegistrationFormInterface
  ): Promise<any> => {
    return RegisterApi.requestPost("users/register", {
      data: { user: { ...values } },
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        throw error;
      });
  };
}
