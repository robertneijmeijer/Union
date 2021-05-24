import ApiBase from "@/api/api-base";
import { Union } from "@/types/union";
import { AxiosResponse } from "axios";
import { User } from "@/types/user";

export interface InviteInfoResponse {
  status: "accepted" | "open";
  invite_creator: User;
  union: Union;
}

export default class InviteApi extends ApiBase {
  public static acceptInvite = (invite_token: string): Promise<any> => {
    return InviteApi.requestPost(
      `unions/invite/accept?invite_token=${invite_token}`
    );
  };

  public static getInviteInfo = (
    invite_token: string
  ): Promise<InviteInfoResponse> => {
    return InviteApi.requestGetAll(
      `unions/invite?invite_token=${invite_token}`
    );
  };
}