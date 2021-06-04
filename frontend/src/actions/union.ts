import { RootState } from "@/store/store";
import { ActionTree } from "vuex";
import router from "@/router";
import UnionApi, { PostPageType, UnionType } from "@/api/union";
import PostsApi, { PostType, VoteENUM } from "@/api/posts";
import { AxiosResponse } from "axios";
import { UnionState } from "@/store/modules/union";

export enum ActionTypes {
  UNION_FETCHING = "UNION_FETCHING",

  UNION_ACTION_SUBMIT = "UNION_ACTION_SUBMIT",
  UNION_ACTION_SUCCESS = "UNION_ACTION_SUCCESS",
  UNION_ACTION_FAILED = "UNION_ACTION_FAILED",

  UNION_INVITES_FETCH = "UNION_INVITES_FETCH",
  UNION_INVITES_SUCCESS = "UNION_INVITES_SUCCESS",

  UNION_GENERATE_INVITE_SUBMIT = "UNION_GENERATE_INVITE_SUBMIT",
  UNION_GENERATE_INVITE_FAILED = "UNION_GENERATE_INVITE_FAILED",
  UNION_POSTS_ACTION_SUBMIT = "UNION_POSTS_ACTION_SUBMIT",
  UNION_POSTS_ACTION_SUCCESS = "UNION_POSTS_ACTION_SUCCESS",
  UNION_POSTS_ACTION_FAILED = "UNION_POSTS_ACTION_FAILED",

  // Why here
  UNION_ACTION_FETCH_OVERVIEW = "UNION_ACTION_FETCH_OVERVIEW",
  UNION_ACTION_FETCH_OVERVIEW_SUCCES = "UNION_ACTION_FETCH_OVERVIEW_SUCCES",
}

export interface ActionsInterface {
  [ActionTypes.UNION_ACTION_SUBMIT](commit: any, unionName: string): void;
  [ActionTypes.UNION_INVITES_FETCH](commit: any, unionName: string): void;
  [ActionTypes.UNION_GENERATE_INVITE_SUBMIT](
    commit: any,
    unionName: string
  ): void;
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW](
    commit: any,
    name: string,
    banner: string,
    icon: string
  ): void;
}

export const actions: ActionTree<UnionState, RootState> & ActionsInterface = {
  [ActionTypes.UNION_ACTION_SUBMIT]({ commit, state }, unionName: string) {
    UnionApi.getUnion(unionName)
      .then((res: AxiosResponse<UnionType>) => {
        if (res.status === 200 && res.data.name) {
          commit(ActionTypes.UNION_ACTION_SUCCESS, res.data);
        } else throw Error("User is not authorized to visit this union");
      })
      .catch(err => {
        commit(ActionTypes.UNION_ACTION_FAILED, err);
        router.push("/home");
      });
  },

  [ActionTypes.UNION_POSTS_ACTION_SUBMIT](
    { commit, state },
    params: { unionName: string; page: number }
  ) {
    PostsApi.getAllPosts(params.unionName, params.page)
      .then((res: AxiosResponse<PostPageType>) => {
        if (res.status === 200) {
          commit(ActionTypes.UNION_POSTS_ACTION_SUCCESS, res.data);
        } else
          throw Error(`Can't retrieve posts of union: ${params.unionName}`);
      })
      .catch(err => {
        console.error(err);
        commit(ActionTypes.UNION_POSTS_ACTION_FAILED, err);
      });
  },

  // Waarom zit dit in een single union
  [ActionTypes.UNION_ACTION_FETCH_OVERVIEW]({ commit, state }) {
    UnionApi.getUnions()
      .then((res: AxiosResponse<UnionType[]>) => {
        if (res && res.data) {
          commit(ActionTypes.UNION_ACTION_FETCH_OVERVIEW_SUCCES, res.data);
          if (res.data.length <= 0) {
            router.push("/home/landingspage");
          } else {
            router.push("home");
          }
        } else throw Error("error");
      })
      .catch(err => {
        commit(ActionTypes.UNION_ACTION_FAILED, err);
      });
  },
  [ActionTypes.UNION_INVITES_FETCH](
    { commit, state, dispatch },
    unionName: string
  ) {
    commit(ActionTypes.UNION_FETCHING, true);

    UnionApi.getInvites(unionName)
      .then((res: AxiosResponse<any>) => {
        res.data.invites.length == 0
          ? dispatch(ActionTypes.UNION_GENERATE_INVITE_SUBMIT, unionName)
          : commit(ActionTypes.UNION_INVITES_SUCCESS, res.data);
      })
      .catch(err => {
        commit(
          ActionTypes.UNION_ACTION_FAILED,
          "Something went wrong while getting your invites"
        );
      });
  },
  [ActionTypes.UNION_GENERATE_INVITE_SUBMIT](
    { commit, state, dispatch },
    unionName: string
  ) {
    UnionApi.generateInvite(unionName)
      .then(res => dispatch(ActionTypes.UNION_INVITES_FETCH, unionName))
      .catch(err => {
        commit(ActionTypes.UNION_GENERATE_INVITE_FAILED, err.response.data);
      });
  },
};
