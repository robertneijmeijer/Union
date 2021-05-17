import { Module } from "vuex";
import { RootState } from "@/store/store";
import { mutations } from "@/mutations/invite";
import { actions } from "@/actions/invite";
import { Union } from "@/types/union";
import { User } from "@/types/user";

export interface InviteModuleStateInterface {
  token: string | undefined;
  status: "accepted" | "open" | "error" | undefined;
  invite_creator: User | undefined;
  union: Union | undefined;
  fetching: boolean;
  status_code: number | undefined
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
