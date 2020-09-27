import { MutationTree } from "vuex";
import { POSTS } from "./actions";
import { MutationTypes } from "./mutation-types";
import { State } from "./types";

export type CounterMutationsTypes<S = State> = {
  [MutationTypes.SET_COUNTER](state: S, payload: number): void;
  [MutationTypes.RESET_COUNTER](state: S): void;
  [MutationTypes.SET_EMPLOYEE_DATA](state: S, payload: POSTS[]): void;
  [MutationTypes.SELECT_EMPLOYEE](state: S, payload: POSTS): void;
};

export const mutations: MutationTree<State> & CounterMutationsTypes = {
  [MutationTypes.SET_COUNTER](state, payload: number) {
    state.counter = payload;
  },
  [MutationTypes.RESET_COUNTER](state) {
    state.counter = 0;
  },
  [MutationTypes.SET_EMPLOYEE_DATA](state, payload: POSTS[]) {
    state.data = payload;
  },
  [MutationTypes.SELECT_EMPLOYEE](state, payload: POSTS) {
    state.selectedEmployee = payload;
  }
};
