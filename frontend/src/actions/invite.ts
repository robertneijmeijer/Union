import { ActionTree } from "vuex";
import { RootState } from "@/store/store";
import { InviteState } from "@/store/modules/invite";
import InviteApi from "@/api/invite";
import router from "@/router";

export enum ActionTypes {
  INVITE_GET_INFO = "INVITE_GET_INFO",
  INVITE_SET_INFO = "INVITE_SET_INFO",
  INVITE_SET_STATUS_CODE = "INVITE_SET_STATUS_CODE",
  INVITE_ACCEPT = "INVITE_ACCEPT",
  INVITE_SET_IS_LOADING = "INVITE_SET_IS_LOADING",
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
        commit(ActionTypes.INVITE_SET_INFO, result);
        commit(ActionTypes.INVITE_SET_STATUS_CODE, 200);
        commit(ActionTypes.INVITE_SET_IS_LOADING, false);
      })
      .catch(error => {
        commit(
          ActionTypes.INVITE_SET_STATUS_CODE,
          error.response.status || 500
        );
        commit(ActionTypes.INVITE_SET_IS_LOADING, false);
      });
  },
  [ActionTypes.INVITE_ACCEPT](
    { commit, state },
    payload: InviteTokenInterface
  ) {
    InviteApi.acceptInvite(payload.invite_token)
      .then(result => {
        router.push(`/union/${result.union_id}`);
      })
      .catch(error => {
        commit(
          ActionTypes.INVITE_SET_STATUS_CODE,
          error.response.status_code || 500
        );
      });
  },
};
