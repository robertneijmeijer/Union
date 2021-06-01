import { Module } from "vuex";
import { RootState } from "@/store/store";
import { actions } from "@/actions/post";
import { mutations } from "@/mutations/post";
import {PostType} from "@/api/posts";

export interface PostModuleStateInterface {
    isFetching: boolean;
    errors: unknown;
    post: PostType | null;
}

export type PostState = PostModuleStateInterface;

export const union: Module<PostState, RootState> = {
    state: () => ({
        isFetching: false,
        errors: {},
        post: null,
    }),
    mutations,
    actions,
};
