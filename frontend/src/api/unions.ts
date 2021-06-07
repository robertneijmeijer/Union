import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";

export type UnionType = {
  name: string;
  description: string;
  members_can_invite: boolean;
  icon?: string;
  banner?: string;
};

export default class UnionsApi extends ApiBase {
  public static getUnions = (): Promise<AxiosResponse<UnionType[]>> => {
    return UnionsApi.requestGetAll<UnionType[]>("unions/overview");
  };
}
