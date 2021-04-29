import { RootState, store } from "@/store/store";
import RegisterApi from "@/api/auth";
import UserApi from "@/api/user";
import { ActionTree } from "vuex";
import router from "@/router";
import { UserState } from "@/store/modules/user";
import { i18n } from "@/main";

export interface RegistrationFormInterface {
  username: string;
  email: string;
  password: string;
}

export interface LoginFormInterface {
  username: string;
  password: string;
}

export enum ActionTypes {
  REGISTER_ACTION_SUBMIT = "REGISTER_ACTION_SUBMIT",
  REGISTER_ACTION_FAILED = "REGISTER_ACTION_FAILED",
  REGISTER_ACTION_SUCCESS = "REGISTER_ACTION_SUCCESS",
  LOGIN_ACTION_SUCCESS = "LOGIN_ACTION_SUCCESS",
  LOGIN_ACTION_SUBMIT = "LOGIN_ACTION_SUBMIT",
  LOGIN_ACTION_FAILED = "LOGIN_ACTION_FAILED",
}

export interface ActionsInterface {
  [ActionTypes.REGISTER_ACTION_SUBMIT](
    commit: any,
    payload: RegistrationFormInterface
  ): void;
}

export const actions: ActionTree<UserState, RootState> & ActionsInterface = {
  [ActionTypes.REGISTER_ACTION_SUBMIT](
    { commit, state },
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

  [ActionTypes.LOGIN_ACTION_SUBMIT](
    { commit, state },
    values: LoginFormInterface
  ) {
    UserApi.signIn(values)
      .then(response => {
        if (response.status == 200) {
          store.commit(ActionTypes.LOGIN_ACTION_SUCCESS, response.data);
          router.push("union");
        } else {
          commit(ActionTypes.LOGIN_ACTION_FAILED, {
            general: "Something went wrong. Please try again later.",
          });
        }
      })
      .catch(error => {
        if (error.response.status == 400) {
          commit(ActionTypes.LOGIN_ACTION_FAILED, {
            general: i18n.global.t("login.errors.incorrect_username_password"),
          });
        } else {
          commit(ActionTypes.LOGIN_ACTION_FAILED, {
            general: i18n.global.t("generalized_error_message"),
          });
        }
      });
  },
};
