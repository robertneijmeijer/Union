import { Module } from "vuex";
import { RootState } from "@/store/store";
import { actions } from "@/actions/union";
import { mutations } from "@/mutations/union";
import { UnionType } from "@/api/union";

export interface UnionModuleStateInterface {
  isFetching: boolean;
  errors: unknown;
  union: UnionType | null;
  unions: UnionType[] | null;
}

export type UnionState = UnionModuleStateInterface;

export const union: Module<UnionState, RootState> = {
  state: () => ({
    isFetching: false,
    errors: {},
    union: null,
    unions: null
  }),
  mutations,
  actions,
};
