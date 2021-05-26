import { CommitOptions, createStore, DispatchOptions, Store } from "vuex";
import { user, UserModuleStateInterface } from "@/store/modules/user";
import { ActionsInterface as userActions } from "@/actions/user";
import { MutationsInterface as userMutations } from "@/mutations/user";
import { MutationsInterface as formMutations } from "@/mutations/form";
import { form, FormModuleStateInterface } from "@/store/modules/form";
import { UnionModuleStateInterface, union } from "./modules/union";

// More info: https://betterprogramming.pub/the-state-of-typed-vuex-the-cleanest-approach-2358ee05d230

export interface RootState {
  user: UserModuleStateInterface;
  form: FormModuleStateInterface;
  union: UnionModuleStateInterface;
}
export type MutationTypes = userMutations & formMutations;
export type ActionTypes = userActions;

// Override commit and dispatch to only accept our own typings
export interface StoreInterface
  extends Omit<Store<RootState>, "commit" | "getters" | "dispatch"> {
  commit<K extends keyof MutationTypes>(
    key: K,
    payload?: Parameters<MutationTypes[K]>[1],
    options?: CommitOptions
  ): ReturnType<MutationTypes[K]>;

  dispatch<K extends keyof ActionTypes>(
    key: K,
    payload?: Parameters<ActionTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ActionTypes[K]>;
}

export const store: StoreInterface = createStore<RootState>({
  modules: {
    user,
    form,
    union,
  },
});
