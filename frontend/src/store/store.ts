import {CommitOptions, createStore, DispatchOptions, Module, Store} from "vuex";
import {
    moduleA,
    moduleAState,
    Mutations as moduleAMutations,
    Actions as moduleAActions,
    A as moduleAStateType
} from "@/store/modulea";
import {moduleB, moduleBState} from "@/store/moduleb";

// https://betterprogramming.pub/the-state-of-typed-vuex-the-cleanest-approach-2358ee05d230

export interface RootState {
    user: any
    testModuleA: moduleAState,
    testModuleB: moduleBState
}


export type Mutations = moduleAMutations; // union with mutations from other modules -> && moduleBMutations
export type Actions = moduleAActions  // union with actions from other modules


// Override commit and dispatch to only accept our own typings
export interface PlainStore extends Omit<Store<RootState>, 'commit' | 'getters' | 'dispatch'> {
    commit<K extends keyof Mutations>(
        key: K,
        payload?: Parameters<Mutations[K]>[1],
        options?: CommitOptions
    ): ReturnType<Mutations[K]>

    dispatch<K extends keyof Actions>(
        key: K,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
}

export const store: PlainStore = createStore({
    modules: {
        testModuleA: moduleA,
        testModuleB: moduleB
    }
});
