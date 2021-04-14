import {Module} from "vuex";
import {RootState} from "@/store/store";

export interface moduleBState {
    moduleB: string
}

type B = moduleBState

export const moduleB: Module<B, RootState> = {
    state: () => ({
        moduleB: "moduleB"
    }),
    mutations: {},
    actions: {}
}
