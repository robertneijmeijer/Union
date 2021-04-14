import {ActionContext, ActionTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store/store";

// State
export interface moduleAState {
    counter: number,
    testVariable: string,
}

export type A = moduleAState


// Mutations
export enum MutationTypes {
    A_MUTATION = "A_MUTATION"
}

export interface Mutations {
    [MutationTypes.A_MUTATION](state: A, payload: number): void
}

export const mutations: MutationTree<A> & Mutations = {
    [MutationTypes.A_MUTATION](state, payload) {
        state.counter += 10
    }
}


//  Actions
/* We only want to commit valid mutations, so we override the commit function of the ActionContext */
interface ValidCommitType extends Omit<ActionContext<A, RootState>, "commit"> {
    commit<K extends keyof Mutations>(
        key: K,
        payload?: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export enum ActionTypes {
    A_ACTION = "A_ACTION"
}

export interface Actions {
    [ActionTypes.A_ACTION](commit: ValidCommitType): void
}

export const actions: ActionTree<A, RootState> & Actions = {
    [ActionTypes.A_ACTION]({commit}: ValidCommitType) {
        commit(MutationTypes.A_MUTATION, 1)
    }
}


export const moduleA: Module<A, RootState> = {
    state: () => ({
        counter: 0,
        testVariable: "string test"
    }),
    mutations,
    actions,
}
