import {actionTypes} from "@/actions/auth";

export const authMutations = {
    [actionTypes.SUBMIT_LOGIN_ACTION](state: any, data: any) {
        state.count++
    },
    [actionTypes.SET_REGISTER_RESULT](state: any, data: any) {
        // Update state with register result (validation errors or success f.e.)
    }
}
