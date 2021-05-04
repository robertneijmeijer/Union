import { MutationTree } from "vuex";
import { FORM_ID, FormModuleState } from "@/store/modules/form";

export enum MutationTypes {
  FORM_INIT = "FORM_INIT",
  FORM_DESTROY = "FORM_DESTROY",
  FORM_SET_ERRORS = "FORM_SET_ERRORS",
  FORM_SET_ERROR = "FORM_SET_ERROR",
  FORM_UNSET_ERROR = "FORM_UNSET_ERROR",
  FORM_UNSET_ERRORS = "FORM_UNSET_ERRORS",
}

export interface FormInitInterface {
  formId: FORM_ID;
  fields: string[];
}

export interface FormErrorInterface {
  key: string,
  value: string
}

export interface FormErrorsInterface {
  [key: string]: string;
}

export interface FormFieldsInterface {
  [key: string]: string;
}

export interface MutationsInterface {
  [MutationTypes.FORM_INIT](
    state: FormModuleState,
    payload: FormInitInterface
  ): void;
  [MutationTypes.FORM_DESTROY](
    state: FormModuleState,
    payload: FormInitInterface
  ): void;
  [MutationTypes.FORM_SET_ERRORS](
    state: FormModuleState,
    payload: FormErrorsInterface
  ): void;
  [MutationTypes.FORM_SET_ERROR](
      state: FormModuleState,
      payload: FormErrorInterface
  ): void;
  [MutationTypes.FORM_UNSET_ERROR](state: FormModuleState, key: string): void;
  [MutationTypes.FORM_UNSET_ERRORS](state: FormModuleState): void;
}

export const mutations: MutationTree<FormModuleState> & MutationsInterface = {
  [MutationTypes.FORM_INIT](state, payload: FormInitInterface) {
    // Transform string array to object with keys
    const transformedFields = payload.fields.reduce(
      (object: any, field: string) => {
        object[field] = "";
        return object;
      },
      {}
    );

    state.formId = payload.formId;
    state.fields = transformedFields;
    state.errors = {};
  },
  [MutationTypes.FORM_DESTROY](state) {
    state.formId = undefined;
    state.fields = undefined;
    state.errors = {};
  },
  [MutationTypes.FORM_SET_ERROR](
    state: FormModuleState,
    payload: FormErrorInterface
  ) {
    if(!state.errors) return
    state.errors[payload.key] = payload.value
  },
  [MutationTypes.FORM_SET_ERRORS](
      state: FormModuleState,
      payload: FormErrorsInterface
  ) {
    state.errors = payload;
  },
  [MutationTypes.FORM_UNSET_ERROR](state: FormModuleState, key: string) {
    if (!state.errors) return;

    delete state.errors[key];
  },
  [MutationTypes.FORM_UNSET_ERRORS](state: FormModuleState) {
    state.errors = undefined;
  },
};
