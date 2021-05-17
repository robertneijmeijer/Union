import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";

export type UnionType = {
  name: string;
  description: string;
  members_can_invite: boolean;
  icon?: string;
  banner?: string;
};

export default class UnionApi extends ApiBase {
  public static getAllPosts = (unionNamen: string): Promise<AxiosResponse<UnionType>> => {
    return UnionApi.requestGet<UnionType>("posts", unionNamen);
  };
}
