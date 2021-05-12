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
    setTimeout(() => {
      // TODO: Call info endpoint
      commit(ActionTypes.INVITE_SET_INFO, {
        status: "open",
        invite_username: "KOEN",
        union: {
          name: "CRYPTOTEST",
          banner:
            "https://ps.w.org/simple-banner/assets/banner-772x250.png?rev=1198699",
          icon: "TEST2",
        },
      });
      commit(ActionTypes.INVITE_SET_IS_LOADING, false);
    }, 1000);
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
