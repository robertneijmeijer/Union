import { ActionTypes } from "@/actions/union";
import { UnionType } from "@/api/union";
import { UnionState } from "@/store/modules/union";
import { MutationTree } from "vuex";
import { InviteInfoResponse } from "@/api/invite";

export interface MutationsInterface {
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState): void;
  [ActionTypes.UNION_ACTION_SUCCESS](
    state: UnionState,
    payload: UnionType
  ): void;
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: unknown): void;
  [ActionTypes.UNION_SET_CURRENT_INVITES](
    state: UnionState,
    payload: any
  ): void;
  [ActionTypes.UNION_SET_IS_FETCHING](
    state: UnionState,
    payload: boolean
  ): void;
}

export const mutations: MutationTree<UnionState> & MutationsInterface = {
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState) {
    state.isFetching = true;
    state.errors = {};
  },
  [ActionTypes.UNION_ACTION_SUCCESS](state: UnionState, payload: UnionType) {
    state.isFetching = false;
    state.union = payload;
  },
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: unknown) {
    state.errors = payload;
    state.isFetching = false;
    state.union = null;
    state.invites = null;
  },
  [ActionTypes.UNION_SET_CURRENT_INVITES](
    state: UnionState,
    payload: any
  ) {
    console.log("setting invites")
    state.invites = payload;
  },
  [ActionTypes.UNION_SET_IS_FETCHING](state: UnionState, payload: boolean) {
    state.isFetching = payload;
  },
};
