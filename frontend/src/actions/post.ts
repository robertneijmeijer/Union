import {ActionTree} from "vuex";
import {RootState} from "@/store/store";
import {PostState} from "@/store/modules/post";

export enum ActionTypes {
    POST_ACTION_FETCH = "POST_ACTION_FETCH",
    POST_ACTION_SUCCESS = "POST_ACTION_SUCCESS",
    POST_ACTION_FAILED = "POST_ACTION_FAILED",
}

export interface ActionsInterface {
    [ActionTypes.POST_ACTION_FETCH](commit: any, postId: string): void;
}

export const actions: ActionTree<PostState, RootState> & ActionsInterface = {
    [ActionTypes.POST_ACTION_FETCH]({ commit, state }, postId: string) {
        console.log(ActionTypes.POST_ACTION_FETCH)
    },
};
