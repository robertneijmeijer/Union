import { ActionTypes } from "@/actions/union";
import { UnionType } from "@/api/union";
import { UnionState } from "@/store/modules/union";
import { MutationTree } from "vuex";
import { InviteInfoResponse } from "@/api/invite";
import {Vue} from "vue-class-component";
import {now} from "moment";

export interface MutationsInterface {
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState): void;
  [ActionTypes.UNION_ACTION_SUCCESS](
    state: UnionState,
    payload: UnionType
  ): void;
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: string): void;
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
    state.errors = "";
  },
  [ActionTypes.UNION_ACTION_SUCCESS](state: UnionState, payload: UnionType) {
    state.isFetching = false;
    state.union = payload;
  },
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: string) {
    console.log("payload");
    console.log(payload);

    // this.$set(state.errors, payload)
    // Vue.set()
    // state.errors = payload;
    // state.errors = { ...state.errors, ...payload }

    state.errors = now().toString()

    console.log(state.errors);
    state.isFetching = false;
    state.union = null;
    state.invites = null;
  },
  [ActionTypes.UNION_SET_CURRENT_INVITES](state: UnionState, payload: any) {
    console.log("setting invites");
    state.invites = payload;
  },
  [ActionTypes.UNION_SET_IS_FETCHING](state: UnionState, payload: boolean) {
    state.isFetching = payload;
  },
};
