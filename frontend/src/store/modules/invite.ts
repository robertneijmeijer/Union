import { Module } from "vuex";
import { RootState } from "@/store/store";
import { mutations } from "@/mutations/invite";
import { actions } from "@/actions/invite";

export interface InviteModuleStateInterface {
  token: string | undefined;
  status: "accepted" | "open" | "error" | undefined;
  username: string | undefined;
  union: {} | undefined;
  fetching: boolean;
}

export type InviteState = InviteModuleStateInterface;

export const invite: Module<InviteState, RootState> = {
  state: () => ({
    token: undefined,
    status: undefined,
    username: undefined,
    union: undefined,
    fetching: false,
  }),
  mutations,
  actions,
};
