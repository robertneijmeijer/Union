import { RootState, store } from "@/store/store";
import RegisterApi from "@/api/auth";
import UserApi from "@/api/user";
import { ActionTree } from "vuex";
import router from "@/router";
import { UserState } from "@/store/modules/user";
import { i18n } from "@/main";
import { MutationTypes } from "@/mutations/form";

export interface RegistrationFormInterface {
  username: string;
  email: string;
  password: string;
}

export interface UsernameEmailInterface {
  username: string | null;
  password: string | null;
}

export enum ActionTypes {
  REGISTER_ACTION_SUBMIT = "REGISTER_ACTION_SUBMIT",
  REGISTER_ACTION_FAILED = "REGISTER_ACTION_FAILED",
  REGISTER_ACTION_SUCCESS = "REGISTER_ACTION_SUCCESS",
  REGISTER_ACTION_VALIDATE = "REGISTER_ACTION_VALIDATE",
  LOGIN_ACTION_SUCCESS = "LOGIN_ACTION_SUCCESS",
  LOGIN_ACTION_SUBMIT = "LOGIN_ACTION_SUBMIT",
  LOGIN_ACTION_FAILED = "LOGIN_ACTION_FAILED",
  USER_FETCH = "USER_FETCH",
  USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS",
  USER_FETCH_FAILED = "USER_FETCH_FAILED",
  USER_SET_IS_FETCHING = "USER_SET_IS_FETCHING",
}

export interface ActionsInterface {
  [ActionTypes.REGISTER_ACTION_SUBMIT](
    commit: any,
    payload: RegistrationFormInterface
  ): void;

  [ActionTypes.REGISTER_ACTION_VALIDATE](
    commit: any,
    payload: UsernameEmailInterface
  ): void;
}

export const actions: ActionTree<UserState, RootState> & ActionsInterface = {
  [ActionTypes.REGISTER_ACTION_SUBMIT](
    { commit, state },
    values: RegistrationFormInterface
  ) {
    RegisterApi.register(values)
      .then(result => {
        store.commit(ActionTypes.REGISTER_ACTION_SUCCESS, result.data);
        router.push("login");
      })
      .catch(error => {
        commit(ActionTypes.REGISTER_ACTION_FAILED, error.message);
      });
  },
  [ActionTypes.REGISTER_ACTION_VALIDATE](
    { commit, state },
    values: UsernameEmailInterface
  ) {
    UserApi.validateUsernameEmail(values)
      .then() // Do nothing because it succeeded
      .catch(error => {
        const errors = error.response.data;
        const translatedArray = Object.entries(errors).map(([key, value]) => {
          let translation = value;
          switch (key) {
            case "username":
              translation = i18n.global.t(
                "register.errors.username_already_taken"
              );
              break;
            case "email":
              translation = i18n.global.t(
                "register.errors.email_already_taken"
              );
              break;
          }
          return { [key]: translation };
        });
        const translatedErrorObject = Object.assign({}, ...translatedArray);

        commit(MutationTypes.FORM_SET_ERRORS, translatedErrorObject);
      });
  },

  [ActionTypes.LOGIN_ACTION_SUBMIT](
    { commit, state },
    values: UsernameEmailInterface
  ) {
    UserApi.signIn(values)
      .then(response => {
        if (response.status == 200) {
          store.commit(ActionTypes.LOGIN_ACTION_SUCCESS, response.data);
          router.push("union");
        } else {
          commit(ActionTypes.LOGIN_ACTION_FAILED, {
            general: i18n.global.t("global.generalized_error_message"),
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
            general: i18n.global.t("global.generalized_error_message"),
          });
        }
      });
  },
  [ActionTypes.USER_FETCH]({ commit }) {
    commit(ActionTypes.USER_SET_IS_FETCHING, true);
    UserApi.getUser()
      .then(res => {
        commit(ActionTypes.USER_FETCH_SUCCESS, res.data);
        commit(ActionTypes.USER_SET_IS_FETCHING, false);
      })
      .catch(err => {
        commit(ActionTypes.USER_FETCH_FAILED, err.response.data);
        commit(ActionTypes.USER_SET_IS_FETCHING, false);
      });
  },
};
