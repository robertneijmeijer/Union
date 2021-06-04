import { ActionTypes } from "@/actions/union";
import { UnionType } from "@/api/union";
import { UnionState } from "@/store/modules/union";
import { MutationTree } from "vuex";
import { now } from "moment";

export interface MutationsInterface {
  [ActionTypes.UNION_FETCHING](state: UnionState, payload: boolean): void;
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState): void;
  [ActionTypes.UNION_ACTION_SUCCESS](
    state: UnionState,
    payload: UnionType
  ): void;
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: string): void;
  [ActionTypes.UNION_INVITES_SUCCESS](state: UnionState, payload: any): void;
  [ActionTypes.UNION_GENERATE_INVITE_FAILED](
    state: UnionState,
    payload: any
  ): void;
}

export const mutations: MutationTree<UnionState> & MutationsInterface = {
  [ActionTypes.UNION_FETCHING](state: UnionState, payload: boolean) {
    state.isFetching = payload;
  },
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState) {
    state.isFetching = true;
    state.errors = "";
  },
  [ActionTypes.UNION_ACTION_SUCCESS](state: UnionState, payload: UnionType) {
    state.union = payload;
    state.isFetching = false;
  },
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: string) {
    state.errors = payload;
    state.isFetching = false;
  },
  [ActionTypes.UNION_INVITES_SUCCESS](state: UnionState, payload: any) {
    state.invites = payload;
  },
  [ActionTypes.UNION_GENERATE_INVITE_FAILED](state: UnionState, err: string) {
    state.errors = err;
    state.isFetching = false;
  },
};
