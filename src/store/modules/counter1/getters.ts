import { GetterTree } from "vuex";
import { RootStateTyping } from "../../index";
import { State } from "./types";

export type CounterGettersTypes = {
  doubledCounter1(state: State): number;
  counterValue1(state: State): number;
  getRootDispatch(state: State): boolean
};

export const getters: GetterTree<State, RootStateTyping> &
  CounterGettersTypes = {
  counterValue1: state => {
    return state.counter1;
  },
  doubledCounter1: state => {
    return state.counter1 * 2;
  },
  getRootDispatch: state => {
    return state.rootDispatch;
  }
};
