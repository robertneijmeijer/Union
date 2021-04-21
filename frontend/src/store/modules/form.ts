import {Module} from "vuex";
import {RootState} from "@/store/store";

export interface FormModuleStateInterface {
    formId: number | undefined
    // Add other values needed for form handling in different ticket/PR
}

export type FormModuleState = FormModuleStateInterface

export const form: Module<FormModuleState, RootState> = {
    state: () => ({
        formId: undefined
    }),
    mutations: {},
    actions: {}
}
