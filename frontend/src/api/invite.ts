import ApiBase from "@/api/api-base";
import { Union } from "@/types/union";
import { AxiosResponse } from "axios";

export interface InviteInfoResponse {
  status: "accepted" | "open" | "error";
  invite_username: string;
  union: Union;
}

export default class InviteApi extends ApiBase {
  public static acceptInvite = (
    invite_token: string
  ): Promise<InviteInfoResponse> => {
    return InviteApi.requestPost(
      `unions/invite/accept?invite_token?${invite_token}`
    );
  };
}
