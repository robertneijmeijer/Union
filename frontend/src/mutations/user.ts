import {ActionTypes} from "@/actions/user";
import {MutationTree} from "vuex";
import {UserState} from "@/store/modules/user";

export interface Mutations {
    [ActionTypes.REGISTER_ACTION_SUBMIT](state: UserState): void
    [ActionTypes.REGISTER_ACTION_SUCCESS](state: UserState, payload: any): void
    [ActionTypes.REGISTER_ACTION_FAILED](state: UserState, payload: any): void
}

export const mutations: MutationTree<UserState> & Mutations = {
    [ActionTypes.REGISTER_ACTION_SUBMIT](state: UserState) {
        state.isFetching = true;
        state.errors = {};
        state.user = {};
    },
    [ActionTypes.REGISTER_ACTION_SUCCESS](state: UserState, payload: any) {
        state.user = payload;
        state.isFetching = false;
    },
    [ActionTypes.REGISTER_ACTION_FAILED](state: UserState, payload: any) {
        state.errors = payload;
        state.isFetching = false;
    },
}
