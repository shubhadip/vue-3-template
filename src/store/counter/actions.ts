import { ActionTree, ActionContext } from "vuex";
import { State } from "./types";
import { CounterMutationsTypes } from "./mutations";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { RootStateTyping } from "..";
import Axios from "axios";

type AugmentedActionContext = {
  commit<K extends keyof CounterMutationsTypes>(
    key: K,
    payload: Parameters<CounterMutationsTypes[K]>[1]
  ): ReturnType<CounterMutationsTypes[K]>;
} & Omit<ActionContext<State, RootStateTyping>, "commit">;

export type RESPONSE = {
  status: string;
  data: POSTS[];
  selectedEmployee?: POSTS;
};

export type POSTS = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export interface CounterActionsTypes {
  [ActionTypes.GET_COUTNER](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>;
  [ActionTypes.FETCH_EMPLOYEES]({
    commit
  }: AugmentedActionContext): Promise<void>;
  [ActionTypes.SET_EMPLOYEE_DATA](
    { commit }: AugmentedActionContext,
    payload: POSTS[]
  ): void;
  [ActionTypes.SELECT_EMPLOYEE](
    { commit }: AugmentedActionContext,
    payload: POSTS
  ): void;
}

export const actions: ActionTree<State, RootStateTyping> &
  CounterActionsTypes = {
  [ActionTypes.GET_COUTNER]({ commit, dispatch }, payload: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(MutationTypes.SET_COUNTER, payload);
        dispatch(ActionTypes.SET_ROOT_DISPATCH, true, { root: true });
        resolve(payload);
      }, 0);
    });
  },
  async [ActionTypes.FETCH_EMPLOYEES]({ dispatch }) {
    const data = await Axios.get("http://jsonplaceholder.typicode.com/posts");
    dispatch(ActionTypes.SET_EMPLOYEE_DATA, data.data);
  },
  [ActionTypes.SET_EMPLOYEE_DATA]({ commit }, payload: POSTS[]) {
    commit(MutationTypes.SET_EMPLOYEE_DATA, payload);
  },
  [ActionTypes.SELECT_EMPLOYEE]({ commit }, payload: POSTS) {
    commit(MutationTypes.SELECT_EMPLOYEE, payload);
  }
};
