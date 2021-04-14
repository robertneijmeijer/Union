import {Module} from "vuex";
import {RootState} from "@/store/store";
import {actions} from "@/actions/user";
import {mutations} from "@/mutations/user";

// TODO: Whats the difference when using the interface and using the type in store creation?
export interface userModuleState {
    isFetching: boolean;
    errors: {},
    user: {} | undefined
}

export type UserState = userModuleState

export const user: Module<UserState, RootState> = {
    state: () => ({
        isFetching: false,
        errors: {},
        user: undefined
    }),
    mutations,
    actions,
}
