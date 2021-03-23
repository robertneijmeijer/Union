import { createStore } from "vuex";

import { authActions } from "../actions/auth"
import { authMutations } from "../mutations/auth"

const actions = {
  ...authActions
}

const mutations = {
  ...authMutations
}

export const store = createStore({
  state() {
    return {}; // state in here
  },
  actions,
  mutations,
});
