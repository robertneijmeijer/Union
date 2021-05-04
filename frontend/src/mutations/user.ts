import { ActionTypes } from "@/actions/user";
import { MutationTree } from "vuex";
import { UserState } from "@/store/modules/user";

export interface MutationsInterface {
  [ActionTypes.REGISTER_ACTION_SUBMIT](state: UserState): void;
  [ActionTypes.REGISTER_ACTION_SUCCESS](state: UserState, payload: any): void;
  [ActionTypes.REGISTER_ACTION_FAILED](state: UserState, payload: any): void;
  [ActionTypes.LOGIN_ACTION_SUCCESS](state: UserState, payload: any): void;
}

export const mutations: MutationTree<UserState> & MutationsInterface = {
  [ActionTypes.REGISTER_ACTION_SUBMIT](state: UserState) {
    state.isFetching = true;
  },
  [ActionTypes.REGISTER_ACTION_SUCCESS](state: UserState, payload: any) {
    state.isFetching = false;
    state.errors = {};
  },
  [ActionTypes.REGISTER_ACTION_FAILED](state: UserState, payload: any) {
    state.errors = { ...state.errors, ...payload };
    state.isFetching = false;
  },
  [ActionTypes.LOGIN_ACTION_SUBMIT](state: UserState) {
    state.isFetching = true;
    state.errors = {};
    state.user = {};
  },
  [ActionTypes.LOGIN_ACTION_SUCCESS](state: UserState, payload: any) {
    state.user = payload;
    state.isFetching = false;
  },
  [ActionTypes.LOGIN_ACTION_FAILED](state: UserState, payload: any) {
    state.errors = payload;
    state.isFetching = false;
  },
};
