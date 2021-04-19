import {ActionTypes} from "@/actions/form";
import {MutationTree} from "vuex";
import {FormModuleState} from "@/store/modules/form";

export interface MutationsInterface {
    [ActionTypes.FORM_INIT](state: FormModuleState): void
}

export const mutations: MutationTree<FormModuleState> & MutationsInterface = {
    [ActionTypes.FORM_INIT](state: FormModuleState) {}
}
