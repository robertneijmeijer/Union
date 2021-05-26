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
}

export interface ActionsInterface {
  [ActionTypes.UNION_ACTION_SUBMIT](commit: any, unionName: string): void;
}

export const actions: ActionTree<UnionState, RootState> & ActionsInterface = {
  [ActionTypes.UNION_ACTION_SUBMIT]({ commit, state }, unionName: string) {
    UnionApi.getUnion(unionName)
      .then((res: AxiosResponse<UnionType>) => {
        if (res.status === 200 && res.data.name)
          commit(ActionTypes.UNION_ACTION_SUCCESS, res.data);
        else throw Error("User is not authorized to visit this union");
      })
      .catch(err => {
        console.error(err);
        commit(ActionTypes.UNION_ACTION_FAILED, err);
        router.push({ name: "union-overview" });
      });
  },
};
