import { ActionTypes } from "@/actions/unions";
import { UnionState } from "@/store/modules/unions";
import { UnionType } from "@/api/unions";
import { MutationTree } from "vuex";

export interface MutationsInterface {
  [ActionTypes.POST_ACTION_SET_FETCHING](
    state: UnionState,
    value: boolean
  ): void;
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW_SUCCES](
    state: UnionState,
    payload: UnionType[]
  ): void;
}

export const mutations: MutationTree<UnionState> & MutationsInterface = {
  [ActionTypes.POST_ACTION_SET_FETCHING](state: UnionState, value: boolean) {
    state.isFetching = value;
  },
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW_SUCCES](
    state: UnionState,
    payload: UnionType[]
  ) {
    state.isFetching = false;
    state.unions = payload;
  },
};
