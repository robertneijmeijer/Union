import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";
import { UnionType } from "./union";
import { UserType } from "@/api/user";

export type PostType = {
  title: string;
  message: string;
  created_at: boolean;
  union: UnionType;
  user: UserType;
  number_of_comments: number;
  votes: number;
};

export default class UnionApi extends ApiBase {
  public static getAllPosts = (
    unionNames: string
  ): Promise<AxiosResponse<UnionType>> => {
    return UnionApi.requestGet<UnionType>("posts", unionNames);
  };

  public static getPost = (id: string): Promise<AxiosResponse<PostType>> => {
    return UnionApi.requestGet<PostType>("posts", id);
  };
}
