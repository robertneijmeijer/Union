import {MutationTree} from "vuex";
import {FORM_ID, FormModuleState} from "@/store/modules/form";

export enum MutationTypes {
    FORM_INIT = "FORM_INIT",
    FORM_DESTROY = "FORM_DESTROY"
}

export interface FormInitInterface {
    formId: FORM_ID,
    fields: string[]
}

export interface MutationsInterface {
    [MutationTypes.FORM_INIT](state: FormModuleState, payload: FormInitInterface): void
    [MutationTypes.FORM_DESTROY](state: FormModuleState, payload: FormInitInterface): void
}

export const mutations: MutationTree<FormModuleState> & MutationsInterface = {
    [MutationTypes.FORM_INIT](state, payload: FormInitInterface) {
        // Transform string array to object with keys
        const transformedFields = payload.fields.reduce((object: any, field: string) => {
            object[field] = ""
            return object
        }, {})

        state.formId = payload.formId
        state.fields = transformedFields
        state.errors = {}
    },

    [MutationTypes.FORM_DESTROY](state) {
        state.formId = undefined
        state.fields = undefined
        state.errors = {}
    }
}
