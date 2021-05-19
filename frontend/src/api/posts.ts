import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";
import { UnionType } from "./union";

export default class UnionApi extends ApiBase {
  public static getAllPosts = (
    unionNames: string
  ): Promise<AxiosResponse<UnionType>> => {
    return UnionApi.requestGet<UnionType>("posts", unionNames);
  };
}
