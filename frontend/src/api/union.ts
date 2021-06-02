import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";
import { InviteInfoResponse } from "@/api/invite";

export type UnionType = {
  name: string;
  description: string;
  members_can_invite: boolean;
  icon?: string;
  banner?: string;
};

export default class UnionApi extends ApiBase {
  public static postUnion = (data: any): Promise<any> => {
    return UnionApi.requestPost("unions", { data }).then(response => response);
  };

  public static getUnion = (
    name: string
  ): Promise<AxiosResponse<UnionType>> => {
    return UnionApi.requestGet<UnionType>("unions", name);
  };

  public static getInvites = (
    name: string
  ): Promise<AxiosResponse<InviteInfoResponse[]>> => {
    return UnionApi.executeRequest(
      "get",
      `/unions/invite/open?union=${encodeURIComponent(name)}`
    );
  };

  public static generateInvite = (
    name: string
  ): Promise<AxiosResponse<InviteInfoResponse>> => {
    return UnionApi.requestPost("unions/invite", { data: { name } });
  };
}
