import { actionTypes } from "@/actions/auth";
import { RootState } from "@/store/store";

export const authMutations = {
  [actionTypes.REGISTER_ACTION_SUBMIT](state: RootState) {
    state.user.isFetching = true;
    state.user.errors = {};
    state.user.user = {};
  },
  [actionTypes.REGISTER_ACTION_SUCCESS](state: RootState, data: any) {
    state.user.user = data;
    state.user.isFetching = false;
  },
  [actionTypes.REGISTER_ACTION_FAILED](state: RootState, data: any) {
    state.user.errors = data;
    state.user.isFetching = false;
  },
};
