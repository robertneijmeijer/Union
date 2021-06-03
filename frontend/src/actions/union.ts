import { RootState } from "@/store/store";
import { ActionTree } from "vuex";
import router from "@/router";
import UnionApi, { UnionType } from "@/api/union";
import { AxiosResponse } from "axios";
import { UnionState } from "@/store/modules/union";

export enum ActionTypes {
  UNION_ACTION_SUBMIT = "UNION_ACTION_SUBMIT",
  UNION_ACTION_SUCCESS = "UNION_ACTION_SUCCESS",
  UNION_ACTION_FAILED = "UNION_ACTION_FAILED",
  UNION_GET_CURRENT_INVITES = "UNION_GET_CURRENT_INVITES",
  UNION_SET_CURRENT_INVITES = "UNION_SET_CURRENT_INVITES",
  UNION_SET_IS_FETCHING = "UNION_SET_IS_FETCHING",
  UNION_GENERATE_INVITE = "UNION_GENERATE_INVITE",
}

export interface ActionsInterface {
  [ActionTypes.UNION_ACTION_SUBMIT](commit: any, unionName: string): void;
  [ActionTypes.UNION_GET_CURRENT_INVITES](commit: any, unionName: string): void;
  [ActionTypes.UNION_GENERATE_INVITE](commit: any, unionName: string): void;
}

export const actions: ActionTree<UnionState, RootState> & ActionsInterface = {
  [ActionTypes.UNION_ACTION_SUBMIT]({ commit, state }, unionName: string) {
    UnionApi.getUnion(unionName)
      .then((res: AxiosResponse<UnionType>) => {
        if (res.status === 200 && res.data.name) {
          commit(ActionTypes.UNION_ACTION_SUCCESS, res.data);
        } else throw Error("User is not authorized to visit this union");
      })
      .catch(err => {
        console.error(err);
        commit(ActionTypes.UNION_ACTION_FAILED, err);
        router.push({ name: "union-overview" });
      });
  },
  [ActionTypes.UNION_GET_CURRENT_INVITES](
    { commit, state, dispatch },
    unionName: string
  ) {
    commit(ActionTypes.UNION_SET_IS_FETCHING, true);
    UnionApi.getInvites(unionName)
      .then((res: AxiosResponse<any>) => {
        if (res.data.invites.length == 0) {
          dispatch(ActionTypes.UNION_GENERATE_INVITE, unionName);
          return;
        }
        commit(ActionTypes.UNION_SET_CURRENT_INVITES, res.data);
        commit(ActionTypes.UNION_SET_IS_FETCHING, false);
      })
      .catch(err => {
        commit(ActionTypes.UNION_ACTION_FAILED, err.response && err.response.data);
        commit(ActionTypes.UNION_SET_IS_FETCHING, false);
      });
  },
  [ActionTypes.UNION_GENERATE_INVITE](
    { commit, state, dispatch },
    unionName: string
  ) {
    commit(ActionTypes.UNION_SET_IS_FETCHING, true);
    UnionApi.generateInvite(unionName)
      .then(res => {
        console.log("invite generated");
        dispatch(ActionTypes.UNION_GET_CURRENT_INVITES, unionName);
        commit(ActionTypes.UNION_SET_IS_FETCHING, false);
      })
      .catch(err => {
        console.log("invite generation failed");
        commit(ActionTypes.UNION_ACTION_FAILED, err.response.data);
        commit(ActionTypes.UNION_SET_IS_FETCHING, false);
      });
  },
};
