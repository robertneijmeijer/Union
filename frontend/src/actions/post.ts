import { ActionTree } from "vuex";
import { RootState } from "@/store/store";
import { posts, PostState } from "@/store/modules/post";
import PostApi, { PostType } from "@/api/posts";
import { AxiosResponse } from "axios";

export enum ActionTypes {
  POST_ACTION_SET_FETCHING = "POST_ACTION_SET_FETCHING",
  POST_ACTION_FETCH = "POST_ACTION_FETCH",
  POST_ACTION_SUCCESS = "POST_ACTION_SUCCESS",
  POST_ACTION_FAILED = "POST_ACTION_FAILED",
}

export interface ActionsInterface {
  [ActionTypes.POST_ACTION_FETCH](commit: any, postId: string): void;
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
};
