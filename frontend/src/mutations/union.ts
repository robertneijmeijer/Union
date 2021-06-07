import { ActionTypes } from "@/actions/union";
import { PostPageType, UnionType } from "@/api/union";
import { UnionState } from "@/store/modules/union";
import { MutationTree } from "vuex";

export interface MutationsInterface {
  [ActionTypes.UNION_FETCHING](state: UnionState, payload: boolean): void;
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState): void;
  [ActionTypes.UNION_ACTION_SUCCESS](
    state: UnionState,
    payload: UnionType
  ): void;
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: string): void;
  [ActionTypes.UNION_INVITES_SUCCESS](state: UnionState, payload: any): void;
  [ActionTypes.UNION_GENERATE_INVITE_FAILED](
    state: UnionState,
    payload: any
  ): void;
}

export const mutations: MutationTree<UnionState> & MutationsInterface = {
  [ActionTypes.UNION_FETCHING](state: UnionState, payload: boolean) {
    state.isFetching = payload;
  },
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState) {
    state.isFetching = true;
    state.errors = "";
  },
  [ActionTypes.UNION_ACTION_SUCCESS](state: UnionState, payload: UnionType) {
    state.isFetching = false;
    state.data = payload;
  },
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: string) {
    state.errors = payload;
    state.isFetching = false;
    state.data = null;
  },
  [ActionTypes.UNION_POSTS_ACTION_SUBMIT](state: UnionState) {
    state.isFetching = true;
    state.errors = "";
  },
  [ActionTypes.UNION_POSTS_ACTION_SUCCESS](
    state: UnionState,
    payload: PostPageType
  ) {
    if (!state.data || !payload || !payload.results) return;

    if (!state.data.posts)
      state.data.posts = { next: undefined, results: undefined };

    if (!state.data.posts.results || state.data.posts.results.length == 0) {
      state.data.posts.results = payload.results;
    } else {
      state.data.posts.results = state.data.posts.results.concat(
        payload.results
      );
    }

    state.data.posts.next = payload.next ? payload.next : undefined;
    state.isFetching = false;
  },
  [ActionTypes.UNION_POSTS_ACTION_FAILED](state: UnionState, payload: string) {
    state.errors = payload;
    state.isFetching = false;
  },
  [ActionTypes.UNION_INVITES_SUCCESS](state: UnionState, payload: any) {
    state.invites = payload;
    state.isFetching = false;
  },
  [ActionTypes.UNION_GENERATE_INVITE_FAILED](state: UnionState, err: string) {
    state.errors = err;
    state.isFetching = false;
  },
};
