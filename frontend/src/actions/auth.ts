import {store} from "@/store/store";
import RegisterApi from "@/api/auth";

export enum actionTypes {
    SUBMIT_LOGIN_ACTION = "SUBMIT_LOGIN_ACTION",
    SUBMIT_REGISTER_ACTION = "SUBMIT_REGISTER_ACTION",
    SET_REGISTER_RESULT = "SET_REGISTER_RESULT"
}

export const authActions = {
    // [actionTypes.SUBMIT_LOGIN_ACTION]() {
    //     console.log("login action fired")
    //     // TODO Call the login api endpoint
    //     // TODO Perform commit (mutation) call
    // },
    // [actionTypes.SUBMIT_REGISTER_ACTION]({ commit, state }, {email, password}) {
    //     // TODO Perform api call to auth api file. -> needs to be created
    //
    //     LoginApi.login().then(r => console.log(r)).catch(error => console.log(error))
    //
    //
    //     store.commit(actionTypes.SET_REGISTER_RESULT, {}) // Fire mutation
    // }
}
