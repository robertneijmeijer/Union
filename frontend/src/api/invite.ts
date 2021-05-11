import ApiBase from "@/api/api-base";

export default class InviteApi extends ApiBase {
  public static acceptInvite = (invite_token: any): Promise<any> => {
    return InviteApi.requestPost(
      `unions/invite/accept?invite_token?${invite_token}`
    )
      .then(response => response)
      .catch(error => {
        throw error;
      });
  };
}
