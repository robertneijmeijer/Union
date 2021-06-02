import { ActionTypes } from "@/actions/post";
import { MutationTree } from "vuex";
import { PostState } from "@/store/modules/post";
import { PostType } from "@/api/posts";

export interface MutationsInterface {
  [ActionTypes.POST_ACTION_SET_FETCHING](
    state: PostState,
    value: boolean
  ): void;
  [ActionTypes.POST_ACTION_SUCCESS](state: PostState, post: PostType): void;
  [ActionTypes.POST_ACTION_FAILED](state: PostState, error: any): void;
}

export const mutations: MutationTree<PostState> & MutationsInterface = {
  [ActionTypes.POST_ACTION_SET_FETCHING](state: PostState, value: boolean) {
    state.isFetching = value;
  },
  [ActionTypes.POST_ACTION_SUCCESS](state: PostState, post: PostType) {
    state.post = post;
  },
  [ActionTypes.POST_ACTION_FAILED](state: PostState, error: any) {
    state.errors = error;
  },
};
