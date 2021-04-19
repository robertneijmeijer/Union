import {RootState, store} from "@/store/store";
import RegisterApi from "@/api/auth";
import {ActionTree} from "vuex";
import router from "@/router";
import {UserState} from "@/store/modules/user";

export interface RegistrationFormInterface {
    username: string;
    email: string;
    password: string;
}

export enum ActionTypes {
    REGISTER_ACTION_SUBMIT = "REGISTER_ACTION_SUBMIT",
    REGISTER_ACTION_FAILED = "REGISTER_ACTION_FAILED",
    REGISTER_ACTION_SUCCESS = "REGISTER_ACTION_SUCCESS",
}

export interface ActionsInterface {
    [ActionTypes.REGISTER_ACTION_SUBMIT](commit: any, payload: RegistrationFormInterface): void
}

export const actions: ActionTree<UserState, RootState> & ActionsInterface = {
    [ActionTypes.REGISTER_ACTION_SUBMIT](
        {commit, state},
        values: RegistrationFormInterface
    ) {
        RegisterApi.register(values.username, values.username, values.password)
            .then(result => {
                store.commit(ActionTypes.REGISTER_ACTION_SUCCESS, result.data);
                router.push("login");
            })
            .catch(error => {
                commit(ActionTypes.REGISTER_ACTION_FAILED, error.message);
            });
    },
}
