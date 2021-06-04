import { Module } from "vuex";
import { RootState } from "@/store/store";
import { actions } from "@/actions/union";
import { mutations } from "@/mutations/union";
import { UnionType } from "@/api/union";
import { InviteInfoResponse } from "@/api/invite";

export interface UnionModuleStateInterface {
  isFetching: boolean;
  errors: string;
  union: UnionType | null;
  invites: string | null;
}

export type UnionState = UnionModuleStateInterface;

export const union: Module<UnionState, RootState> = {
  state: () => ({
    isFetching: false,
    errors: "",
    union: null,
    invites: null,
  }),
  mutations,
  actions,
  getters: {
    unionErrorState: state => {
      return state.errors;
    },
  },
};
