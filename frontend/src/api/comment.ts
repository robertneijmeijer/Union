import { UserType } from "@/api/user";
import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";

export type CommentType = {
  comment_id: string;
  user: UserType;
  children: Array<CommentType>;
  text: string;
  upvotes: number;
  downvotes: number;
  created_at: boolean;
  post: number;
};

export default class CommentApi extends ApiBase {
  public static getAllCommentsForPost = (
    post: number
  ): Promise<AxiosResponse<Array<CommentType>>> => {
    return CommentApi.requestGetAll<Array<CommentType>>(
      "comments?post=" + post
    );
  };

  public static postCommentOnPost = (
    data: Partial<CommentType>
  ): Promise<AxiosResponse<CommentType>> => {
    return CommentApi.requestPost<CommentType>("comments/", { data: data });
  };
}
