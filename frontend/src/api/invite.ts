import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";
import { UnionType } from "@/api/union";
import { UserType } from "@/api/user";

export interface InviteInfoResponse {
  status: "accepted" | "open";
  invite_creator: UserType;
  union: UnionType;
}

export default class InviteApi extends ApiBase {
  public static acceptInvite = (invite_token: string): Promise<any> => {
    return InviteApi.requestPost(
      `unions/invite/accept?invite_token=${invite_token}`
    );
  };

  public static getInviteInfo = (
    invite_token: string
  ): Promise<AxiosResponse<InviteInfoResponse>> => {
    return InviteApi.requestGetAll(
      `unions/invite?invite_token=${invite_token}`
    );
  };
}
