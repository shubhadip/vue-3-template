import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from "./types";

export type CounterMutationsTypes<S = State> = {
  [MutationTypes.SET_COUNTER1](state: S, payload: number): void;
  [MutationTypes.RESET_COUNTER1](state: S): void;
  [MutationTypes.SET_ROOT_DISPATCH](state: S, payload: boolean): void;
};

export const mutations: MutationTree<State> & CounterMutationsTypes = {
  [MutationTypes.SET_COUNTER1](state, payload: number) {
    state.counter1 = payload;
  },
  [MutationTypes.RESET_COUNTER1](state) {
    state.counter1 = 0;
  },
  [MutationTypes.SET_ROOT_DISPATCH](state, payload: boolean) {
    state.rootDispatch = payload;
  }
};
