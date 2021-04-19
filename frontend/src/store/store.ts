import {CommitOptions, createStore, DispatchOptions, Store} from "vuex";
import {user, userModuleState} from "@/store/modules/user";
import {Actions as userActions} from "@/actions/user";
import {Actions as formActions} from "@/actions/form";
import {Mutations as userMutations} from "@/mutations/user";
import {Mutations as formMutations} from "@/mutations/form";
import {form, formModuleState} from "@/store/form";

// More info: https://betterprogramming.pub/the-state-of-typed-vuex-the-cleanest-approach-2358ee05d230

export interface RootState {
    user: userModuleState,
    form: formModuleState
}
export type Mutations = userMutations & formMutations
export type Actions = userActions & formActions

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
        form
    }
});
