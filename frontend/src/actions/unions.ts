import { ActionTree } from "vuex";
import { UnionState } from "@/store/modules/unions";
import { RootState } from "@/store/store";
import UnionsApi, { UnionType } from "@/api/unions";
import { AxiosResponse } from "axios";
import router from "@/router";

export enum ActionTypes {
  POST_ACTION_SET_FETCHING = "POST_ACTION_SET_FETCHING",
  UNION_ACTION_FAILED = "UNION_ACTION_FAILED",
  UNION_ACTION_FETCH_OVERVIEW = "UNION_ACTION_FETCH_OVERVIEW",
  UNION_ACTION_FETCH_OVERVIEW_SUCCES = "UNION_ACTION_FETCH_OVERVIEW_SUCCES",
}
export interface ActionsInterface {
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW](
    commit: any,
    name: string,
    banner: string,
    icon: string
  ): void;
}

export const actions: ActionTree<UnionState, RootState> & ActionsInterface = {
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW]({ commit, state }) {
    commit(ActionTypes.POST_ACTION_SET_FETCHING, true);
    UnionsApi.getUnions()
      .then((res: AxiosResponse<UnionType[]>) => {
        if (res && res.data) {
          commit(ActionTypes.UNION_ACTION_FETCH_OVERVIEW_SUCCES, res.data);
          if (res.data.length <= 0) {
            router.push("/home/landingspage");
          } else {
            router.push("home");
          }
          commit(ActionTypes.POST_ACTION_SET_FETCHING, false);
        } else throw Error("error");
      })
      .catch(err => {
        commit(ActionTypes.UNION_ACTION_FAILED, err);
      });
  },
};
