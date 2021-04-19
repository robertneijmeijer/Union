import {ActionTree} from "vuex";
import {RootState} from "@/store/store";
import {FormModuleState} from "@/store/form";

export enum ActionTypes {
    FORM_INIT = "FORM_INIT",
}

export interface Actions {
    [ActionTypes.FORM_INIT](commit: any, payload: any): void
}

export const actions: ActionTree<FormModuleState, RootState> & Actions = {
    [ActionTypes.FORM_INIT]({commit, state}, payload: any) {},
}
