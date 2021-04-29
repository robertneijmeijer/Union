import { RootState, store } from "@/store/store";
import RegisterApi from "@/api/auth";
import { ActionTree } from "vuex";
import router from "@/router";
import { UserState } from "@/store/modules/user";
import UserApi from "@/api/user";
import { MutationTypes } from "@/mutations/form";

export interface RegistrationFormInterface {
  username: string;
  email: string;
  password: string;
}

export interface UsernameEmailValidationInterface {
  username: string | null;
  email: string | null;
}

export enum ActionTypes {
  REGISTER_ACTION_SUBMIT = "REGISTER_ACTION_SUBMIT",
  REGISTER_ACTION_FAILED = "REGISTER_ACTION_FAILED",
  REGISTER_ACTION_SUCCESS = "REGISTER_ACTION_SUCCESS",
  REGISTER_ACTION_VALIDATE = "REGISTER_ACTION_VALIDATE",
}

export interface ActionsInterface {
  [ActionTypes.REGISTER_ACTION_SUBMIT](
    commit: any,
    payload: RegistrationFormInterface
  ): void;

  [ActionTypes.REGISTER_ACTION_VALIDATE](
    commit: any,
    payload: UsernameEmailValidationInterface
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
  [ActionTypes.REGISTER_ACTION_VALIDATE](
    { commit, state },
    values: UsernameEmailValidationInterface
  ) {
    UserApi.validateUsernameEmail(values)
      .then() // Do nothing because it succeeded
      .catch(error => {
        store.commit(MutationTypes.FORM_SET_ERRORS, error.response.data);
      });
  },
};
