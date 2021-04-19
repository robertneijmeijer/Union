import {Module} from "vuex";
import {RootState} from "@/store/store";

export interface formModuleState {
    formId: number | undefined
    // Add other values needed for form handling in different ticket/PR
}

export type FormModuleState = formModuleState

export const form: Module<FormModuleState, RootState> = {
    state: () => ({
        formId: undefined
    }),
    mutations: {},
    actions: {}
}
