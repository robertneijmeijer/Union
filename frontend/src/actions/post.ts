import { ActionTree } from "vuex";
import { RootState, store } from "@/store/store";
import { posts, PostState } from "@/store/modules/post";
import PostApi, { AllPostsPostType, PostType } from "@/api/posts";
import { AxiosResponse } from "axios";
import UserApi from "@/api/user";
import router from "@/router";
import { i18n } from "@/main";
import { UsernameEmailInterface } from "@/actions/user";

export enum ActionTypes {
  POST_ACTION_SET_FETCHING = "POST_ACTION_SET_FETCHING",
  POST_ACTION_FETCH = "POST_ACTION_FETCH",
  POST_ACTION_SUCCESS = "POST_ACTION_SUCCESS",
  POST_ACTION_FAILED = "POST_ACTION_FAILED",

  ALL_POSTS_ACTION_FETCH = "ALL_POSTS_ACTION_FETCH",
  ALL_POSTS_ACTION_SET_FETCHING = "ALL_POSTS_ACTION_SET_FETCHING",
  ALL_POSTS_ACTION_SUCCESS = "ALL_POSTS_ACTION_SUCCESS",
  ALL_POSTS_ACTION_FAILED = "ALL_POSTS_ACTION_FAILED",
}

export interface ActionsInterface {
  [ActionTypes.POST_ACTION_FETCH](commit: any, postId: string): void;
  [ActionTypes.ALL_POSTS_ACTION_FETCH](commit: any, union_id: string): void;
}

export const actions: ActionTree<PostState, RootState> & ActionsInterface = {
  [ActionTypes.POST_ACTION_FETCH]({ commit, state }, postId: string) {
    commit(ActionTypes.POST_ACTION_SET_FETCHING, true);

    PostApi.getPost(postId)
      .then((res: AxiosResponse<PostType>) => {
        if (res && res.data) {
          commit(ActionTypes.POST_ACTION_SUCCESS, res.data);
        } else {
          commit(ActionTypes.POST_ACTION_SUCCESS, null);
        }

        commit(ActionTypes.POST_ACTION_SET_FETCHING, false);
      })
      .catch(err => {
        commit(ActionTypes.POST_ACTION_FAILED, err.response.data);
        commit(ActionTypes.POST_ACTION_SET_FETCHING, false);
      });
  },

  [ActionTypes.ALL_POSTS_ACTION_FETCH]({ commit, state }, unionName: string) {
    commit(ActionTypes.ALL_POSTS_ACTION_SET_FETCHING, true);
    PostApi.getAllPosts(unionName)
      .then((res: AxiosResponse<Array<AllPostsPostType>>) => {
        if (res && res.data) {
          console.log(res);
          console.log(res.data);
          commit(ActionTypes.ALL_POSTS_ACTION_SUCCESS, res.data);
        } else {
          commit(ActionTypes.ALL_POSTS_ACTION_SUCCESS, null);
        }
        commit(ActionTypes.ALL_POSTS_ACTION_SET_FETCHING, false);
      })
      .catch(err => {
        commit(ActionTypes.ALL_POSTS_ACTION_FAILED, err.response.data);
        commit(ActionTypes.ALL_POSTS_ACTION_SET_FETCHING, false);
      });
  },
};
