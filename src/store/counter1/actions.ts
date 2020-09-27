import { ActionTree, ActionContext } from "vuex";
import { State } from "./types";
import { CounterMutationsTypes } from "./mutations";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { RootStateTyping } from "..";

type AugmentedActionContext = {
  commit<K extends keyof CounterMutationsTypes>(
    key: K,
    payload: Parameters<CounterMutationsTypes[K]>[1]
  ): ReturnType<CounterMutationsTypes[K]>;
} & Omit<ActionContext<State, RootStateTyping>, "commit">;

export interface CounterActionsTypes {
  [ActionTypes.GET_COUTNER1](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>;
  [ActionTypes.SET_ROOT_DISPATCH](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
}

export const actions: ActionTree<State, RootStateTyping> &
  CounterActionsTypes = {
  [ActionTypes.GET_COUTNER1]({ commit }, payload: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(MutationTypes.SET_COUNTER1, payload);
        resolve(payload);
      }, 500);
    });
  },
  [ActionTypes.SET_ROOT_DISPATCH]({ commit }, payload: boolean) {
    commit(MutationTypes.SET_ROOT_DISPATCH, payload);
  }
};
