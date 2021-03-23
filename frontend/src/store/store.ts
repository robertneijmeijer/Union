import {createStore} from "vuex";

import {authActions} from "../actions/auth"
import {authMutations} from "../mutations/auth"


export const state = {
    counter: 0,
    user:
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

export type State = typeof state

