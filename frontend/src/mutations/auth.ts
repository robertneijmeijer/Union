import {actionTypes} from "@/actions/auth";
import {State} from "@/store/store";

export const authMutations = {
    [actionTypes.SUBMIT_LOGIN_ACTION](state: any, data: any) {
        state.count++
    },
    [actionTypes.SET_REGISTER_RESULT](state: State, data: any) {
        // Update state with register result (validation errors or success f.e.)
        state.counter++;
        console.log("MUTATION SET_REGISTER_RESULT")
        console.log(state)
    }
}
