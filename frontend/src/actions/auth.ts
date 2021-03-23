import {RootState, store} from "@/store/store";
import RegisterApi from "@/api/auth";
import {ActionTree,} from "vuex";

export enum actionTypes {
    REGISTER_ACTION_SUBMIT = "REGISTER_ACTION_SUBMIT",
    REGISTER_ACTION_FAILED = "REGISTER_ACTION_FAILED",
    REGISTER_ACTION_SUCCESS = "REGISTER_ACTION_SUCCESS"
}

// https://dev.to/3vilarthas/vuex-typescript-m4j
// TODO: Type actions with above link

export interface registrationForm {
    username: string,
    email: string,
    password: string,
    password_confirm: null | string
}

export const authActions: ActionTree<RootState, RootState> = {
    [actionTypes.REGISTER_ACTION_SUBMIT]({commit, state}, values: registrationForm) {
        RegisterApi.register(values.username, values.username, values.password)
            .then(result => {
                store.commit(actionTypes.REGISTER_ACTION_SUCCESS, result.data)
            })
            .catch(error => {
                commit(actionTypes.REGISTER_ACTION_FAILED, error.message)
            })
    }
}
