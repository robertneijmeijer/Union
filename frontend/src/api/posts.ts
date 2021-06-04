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

export default class PostApi extends ApiBase {
  public static postPost = (data: Partial<PostType>): Promise<AxiosResponse<PostType>> => {
    console.log(data)
    return PostApi.requestPost<PostType>("posts/", { data:data })
  }

  public static getAllPosts = (
    unionNames: string
  ): Promise<AxiosResponse<UnionType>> => {
    return PostApi.requestGet<UnionType>("posts", unionNames);
  };

  public static getPost = (id: string): Promise<AxiosResponse<PostType>> => {
    return PostApi.requestGet<PostType>("posts", id);
  };
}
