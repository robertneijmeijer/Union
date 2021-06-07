import { Module } from "vuex";
import { RootState } from "@/store/store";
import { actions } from "@/actions/unions";
import { mutations } from "@/mutations/unions";
import { UnionType } from "@/api/unions";

export interface UnionsModuleStateInterface {
  isFetching: boolean;
  unions: UnionType[] | null;
}

export type UnionState = UnionsModuleStateInterface;

export const unions: Module<UnionState, RootState> = {
  state: () => ({
    isFetching: false,
    unions: null,
  }),
  mutations,
  actions,
};
