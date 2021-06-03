import { ActionTypes } from "@/actions/union";
import { UnionType } from "@/api/union";
import { UnionState } from "@/store/modules/union";
import { MutationTree } from "vuex";

export interface MutationsInterface {
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState): void;
  [ActionTypes.UNION_ACTION_SUCCESS](
    state: UnionState,
    payload: UnionType
  ): void;
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: unknown): void;
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW_SUCCES](state: UnionState, payload: UnionType[]): void;
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
  },
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW_SUCCES](state: UnionState, payload: UnionType[]) {
    state.isFetching = false;
    state.unions = payload;
  },
};
