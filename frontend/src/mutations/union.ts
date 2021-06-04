import { ActionTypes } from "@/actions/union";
import { PostPageType, UnionType } from "@/api/union";
import { UnionState } from "@/store/modules/union";
import { MutationTree } from "vuex";

export interface MutationsInterface {
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState): void;
  [ActionTypes.UNION_ACTION_SUCCESS](
    state: UnionState,
    payload: UnionType
  ): void;
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: unknown): void;
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW_SUCCES](
    state: UnionState,
    payload: UnionType[]
  ): void;
}

export const mutations: MutationTree<UnionState> & MutationsInterface = {
  [ActionTypes.UNION_ACTION_SUBMIT](state: UnionState) {
    state.isFetching = true;
    state.errors = {};
  },
  [ActionTypes.UNION_ACTION_SUCCESS](state: UnionState, payload: UnionType) {
    state.isFetching = false;
    state.data = payload;
  },
  [ActionTypes.UNION_ACTION_FAILED](state: UnionState, payload: unknown) {
    state.errors = payload;
    state.isFetching = false;
    state.data = null;
  },

  [ActionTypes.UNION_POSTS_ACTION_SUBMIT](state: UnionState) {
    state.isFetching = true;
    state.errors = {};
  },
  [ActionTypes.UNION_POSTS_ACTION_SUCCESS](
    state: UnionState,
    payload: PostPageType
  ) {
    state.isFetching = false;
    if (!state.data) return;

    if (!state.data.posts) {
      state.data.posts = { next: undefined, results: undefined };
    }

    if (payload && payload.next) state.data.posts.next = payload.next;

    state.data.posts.results = payload.results
  },
  [ActionTypes.UNION_POSTS_ACTION_FAILED](state: UnionState, payload: unknown) {
    state.errors = payload;
    state.isFetching = false;
  },

  // Waarom zit dit hierin
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW_SUCCES](
    state: UnionState,
    payload: UnionType[]
  ) {
    state.isFetching = false;
    state.unions = payload;
  },
};
