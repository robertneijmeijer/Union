import {State, store} from "@/store/store";
import RegisterApi from "@/api/auth";
import {ActionContext, ActionTree, MutationTree} from "vuex";

export enum actionTypes {
    SUBMIT_LOGIN_ACTION = "SUBMIT_LOGIN_ACTION",
    SUBMIT_REGISTER_ACTION = "SUBMIT_REGISTER_ACTION",
    SET_REGISTER_RESULT = "SET_REGISTER_RESULT"
}

// https://dev.to/3vilarthas/vuex-typescript-m4j
// TODO: Type actions with above link


export interface registrationForm {
    username: string,
    email: string,
    password: string,
    password_confirm: null | string
}


export const authActions: ActionTree<State, State> = {
    [actionTypes.SUBMIT_LOGIN_ACTION]() {
        console.log("login action fired")
    },
    [actionTypes.SUBMIT_REGISTER_ACTION]({commit, state}, values: registrationForm) {

        RegisterApi.register(values.username, values.username, values.password)
            .then(r => console.log(r))
            .catch(error => console.log(error))

        store.commit(actionTypes.SET_REGISTER_RESULT, {}) // Fire mutation
    }
}
