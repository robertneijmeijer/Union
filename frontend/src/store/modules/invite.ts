import { Module } from "vuex";
import { RootState } from "@/store/store";
import { mutations } from "@/mutations/invite";
import { actions } from "@/actions/invite";
import { UserType } from "@/api/user";
import { UnionType } from "@/api/union";

export interface InviteModuleStateInterface {
  token: string | undefined;
  status: "accepted" | "open" | undefined;
  invite_creator: UserType | undefined;
  union: UnionType | undefined;
  fetching: boolean;
  status_code: number | undefined;
}

export type InviteState = InviteModuleStateInterface;

export const invite: Module<InviteState, RootState> = {
  state: () => ({
    token: undefined,
    status: undefined,
    invite_creator: undefined,
    union: undefined,
    fetching: false,
    status_code: undefined,
  }),
  mutations,
  actions,
};
