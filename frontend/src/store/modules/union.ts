import { Module } from "vuex";
import { RootState } from "@/store/store";
import { actions } from "@/actions/union";
import { mutations } from "@/mutations/union";
import { UnionType } from "@/api/union";
import { InviteInfoResponse } from "@/api/invite";

export interface UnionModuleStateInterface {
  isFetching: boolean;
  errors: unknown;
  union: UnionType | null;
  invites: any | null;
}

export type UnionState = UnionModuleStateInterface;

export const union: Module<UnionState, RootState> = {
  state: () => ({
    isFetching: false,
    errors: {},
    union: null,
    invites: null,
  }),
  mutations,
  actions,
};
