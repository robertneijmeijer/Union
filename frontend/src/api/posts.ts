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

export type AllPostsPostType = {
  title: string;
  message: string;
  created_at: boolean;
  user: UserType;
  number_of_comments: number;
  votes: number;
};

export default class PostApi extends ApiBase {
  public static getAllPosts = (
    unionName: string
  ): Promise<AxiosResponse<Array<AllPostsPostType>>> => {
    return PostApi.requestGetAll<Array<AllPostsPostType>>("posts?union_id="+unionName);
  };

  public static getPost = (id: string): Promise<AxiosResponse<PostType>> => {
    return PostApi.requestGet<PostType>("posts", id);
  };
}
