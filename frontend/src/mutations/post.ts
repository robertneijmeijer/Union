import { ActionTypes } from "@/actions/post";
import { MutationTree } from "vuex";
import {PostState} from "@/store/modules/post";

export interface MutationsInterface {
  [ActionTypes.POST_ACTION_SUCCESS](state: PostState): void;
}

export const mutations: MutationTree<PostState> & MutationsInterface = {
  [ActionTypes.POST_ACTION_SUCCESS](state: PostState) {
    console.log(ActionTypes.POST_ACTION_SUCCESS)
  }
};
