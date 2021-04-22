import { ActionTree } from "vuex";
import { RootState } from "@/store/store";
import { FormModuleState } from "@/store/modules/form";

export enum ActionTypes {
  FORM_INIT = "FORM_INIT",
}

export interface ActionsInterface {
  [ActionTypes.FORM_INIT](commit: any, payload: any): void;
}

export const actions: ActionTree<FormModuleState, RootState> &
  ActionsInterface = {
  [ActionTypes.FORM_INIT]({ commit, state }, payload: any) {},
};
