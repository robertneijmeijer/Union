import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";
import { PostPageType, UnionType } from "./union";
import { UserType } from "@/api/user";

export enum VoteENUM {
  "UPVOTE",
  "NEUTRAL",
  "DOWNVOTE",
}

export type PostType = {
  title: string;
  message: string;
  created_at: boolean;
  union: UnionType;
  user: UserType;
  number_of_comments: number;
  votes: number;
  user_vote: VoteENUM;
};

export default class PostApi extends ApiBase {
  public static getAllPosts = (
    unionName: string,
    page: number
  ): Promise<AxiosResponse<PostPageType>> => {
    return PostApi.requestGetAll<PostPageType>(
      `posts?page_size=10&page=${page}&union_id=${unionName}`
    );
  };

  public static getPost = (id: string): Promise<AxiosResponse<PostType>> => {
    return PostApi.requestGet<PostType>("posts", id);
  };
}
