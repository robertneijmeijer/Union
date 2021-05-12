import { MutationTree } from "vuex";
import { InviteState } from "@/store/modules/invite";
import { ActionTypes } from "@/actions/invite";
import { InviteInfoResponse } from "@/api/invite";

// export enum MutationTypes {
//   INVITE_SET_INFO = "INVITE_SET_INFO",
// } TODO: Fix this

export interface MutationsInterface {
  [ActionTypes.INVITE_SET_INFO](
    state: InviteState,
    payload: InviteInfoResponse
  ): void;
  [ActionTypes.INVITE_RESET_STATE](state: InviteState): void;
  [ActionTypes.INVITE_SET_IS_LOADING](
    state: InviteState,
    payload: boolean
  ): void;
  [ActionTypes.INVITE_ACCEPT_FAILED](state: InviteState, payload: any): void;
}

export const mutations: MutationTree<InviteState> & MutationsInterface = {
  [ActionTypes.INVITE_SET_IS_LOADING](state: InviteState, payload: boolean) {
    state.fetching = payload;
  },
  [ActionTypes.INVITE_SET_INFO](
    state: InviteState,
    payload: InviteInfoResponse
  ) {
    state.union = payload.union;
    state.status = payload.status;
    state.invite_creator = payload.invite_creator;
  },
  [ActionTypes.INVITE_RESET_STATE](state: InviteState) {
    state.token = undefined;
    state.fetching = false;
    state.union = undefined;
    state.status = undefined;
  },
  [ActionTypes.INVITE_ACCEPT_FAILED](state: InviteState) {
    state.status = "error";
  },
};
