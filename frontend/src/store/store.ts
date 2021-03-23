import {createStore} from "vuex";

import {authActions} from "@/actions/auth"
import {authMutations} from "@/mutations/auth"

export interface RootState {
    user: {
        user: {}
        isFetching: boolean,
        errors: {}
    }
}

// TODO: split into user module
export const state: RootState = {
    user: {
        user: {},
        isFetching: false,
        errors: {}
    }
}

const actions = {
    ...authActions
}

const mutations = {
    ...authMutations
}

export const store = createStore({
    state,
    actions,
    mutations,

});
