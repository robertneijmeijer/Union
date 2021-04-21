import {Module} from "vuex";
// @ts-ignore
import { getField, updateField } from 'vuex-map-fields';
import {RootState} from "@/store/store";
import {actions} from "@/actions/form"
import {mutations} from "@/mutations/form"

export enum FORM_ID {
    REGISTER="REGISTER"
}

export interface FormModuleStateInterface {
    formId: FORM_ID | undefined,
    fields: {} | undefined,
    errors: {} | undefined
}

export type FormModuleState = FormModuleStateInterface

export const form: Module<FormModuleState, RootState> = {
    state: () => ({
        formId: undefined,
        fields: {},
        errors: undefined
    }),
    getters: {
        getField
    },
    mutations: {
        updateField,
        ...mutations
    },
    actions
}
