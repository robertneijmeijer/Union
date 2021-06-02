import { Module } from "vuex";
import { RootState } from "@/store/store";
import { actions } from "@/actions/user";
import { mutations } from "@/mutations/user";
import { UserType } from "@/api/user";

export interface UserModuleStateInterface {
  isFetching: boolean;
  errors: {};
  user: UserType | undefined;
}

export type UserState = UserModuleStateInterface;

export const user: Module<UserState, RootState> = {
  state: () => ({
    isFetching: false,
    errors: {},
    user: undefined,
  }),
  mutations,
  actions,
};
