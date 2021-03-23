import {actionTypes} from "@/actions/auth";

export const authMutations = {
    [actionTypes.LOGIN_ACTION](state: any, data: any) {
        state.count++
    }
}
