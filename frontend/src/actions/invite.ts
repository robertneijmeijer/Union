import { ActionTree } from "vuex";
import { RootState, store } from "@/store/store";
import { InviteState } from "@/store/modules/invite";
import InviteApi from "@/api/invite";
import router from "@/router";

export enum ActionTypes {
  INVITE_GET_INFO = "INVITE_GET_INFO",
  INVITE_SET_INFO = "INVITE_SET_INFO",
  INVITE_ACCEPT = "INVITE_ACCEPT",
  INVITE_RESET_STATE = "INVITE_RESET_STATE",
  INVITE_SET_IS_LOADING = "INVITE_SET_IS_LOADING",
  INVITE_ACCEPT_FAILED = "INVITE_ACCEPT_FAILED",
}

export interface InviteTokenInterface {
  invite_token: string;
}

export interface ActionsInterface {
  [ActionTypes.INVITE_GET_INFO](
    commit: any,
    payload: InviteTokenInterface
  ): void;
  [ActionTypes.INVITE_ACCEPT](commit: any, payload: InviteTokenInterface): void;
}

export const actions: ActionTree<InviteState, RootState> & ActionsInterface = {
  [ActionTypes.INVITE_GET_INFO](
    { commit, state },
    payload: InviteTokenInterface
  ) {
    commit(ActionTypes.INVITE_SET_IS_LOADING, true);
    InviteApi.getInviteInfo(payload.invite_token)
      .then(result => {
        commit(ActionTypes.INVITE_SET_INFO, {
          ...result,
        });
        commit(ActionTypes.INVITE_SET_IS_LOADING, false);
        console.log(result);
      })
      .catch(error => {
        // TODO: Error handling
        console.log(error);
      });
  },
  [ActionTypes.INVITE_ACCEPT](
    { commit, state },
    payload: InviteTokenInterface
  ) {
    // TODO: Call accept endpoint
    InviteApi.acceptInvite(payload.invite_token)
      .then(result => {
        // TODO Redirect to result id
        router.push("union");
      })
      .catch(error => {
        commit(ActionTypes.INVITE_ACCEPT_FAILED);
      });
  },
};
