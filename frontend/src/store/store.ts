import {CommitOptions, createStore, DispatchOptions, Store} from "vuex";
import {user, userModuleState} from "@/store/modules/user";
import {Actions as userActions} from "@/actions/user";
import {Mutations as userMutations} from "@/mutations/user";
import {moduleB, moduleBState} from "@/store/moduleb";


// More info: https://betterprogramming.pub/the-state-of-typed-vuex-the-cleanest-approach-2358ee05d230

export interface RootState {
    user: userModuleState,
    testModuleB: moduleBState
}
export type Mutations = userMutations; // union with mutations from other modules -> && moduleBMutations
export type Actions = userActions  // union with actions from other modules

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

// TODO: store state not enforced by RootState interface.?
export const store: PlainStore = createStore<RootState>({
    modules: {
        user,
        testModuleB: moduleB
    }
});
