import { createStore } from "vuex";

import {actionTypes, authActions} from "../actions/auth"
import { authMutations } from "../mutations/auth"
import RegisterApi from "@/api/auth";


//TODO Create general state object

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
  actions: {
    [actionTypes.SUBMIT_LOGIN_ACTION]() {
      console.log("login action fired")
      // TODO Call the login api endpoint
      // TODO Perform commit (mutation) call
    },
    [actionTypes.SUBMIT_REGISTER_ACTION]({ commit, state }, {email, password}) {
      console.log("SUBMIT REGISTER_ACTION")
      // TODO Perform api call to auth api file. -> needs to be created

      RegisterApi.register("testuser", "testemail", "testpass").then(r => console.log(r)).catch(error => console.log(error))


      store.commit(actionTypes.SET_REGISTER_RESULT, {}) // Fire mutation
    }
  },
  mutations,
});
