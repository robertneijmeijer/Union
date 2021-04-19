import {ActionTypes} from "@/actions/form";
import {MutationTree} from "vuex";
import {FormModuleState} from "@/store/form";

export interface Mutations {
    [ActionTypes.FORM_INIT](state: FormModuleState): void
}

export const mutations: MutationTree<FormModuleState> & Mutations = {
    [ActionTypes.FORM_INIT](state: FormModuleState) {}
}
