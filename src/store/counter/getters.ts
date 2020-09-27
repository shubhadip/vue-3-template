import { GetterTree } from "vuex";
import { RootStateTyping } from "..";
import { POSTS } from "./actions";
import { State } from "./types";

export type CounterGettersTypes = {
  doubledCounter(state: State): number;
  counterValue(state: State): number;
  getPosts(state: State): POSTS[];
  selectedEmployee(state: State): POSTS;
};

export const getters: GetterTree<State, RootStateTyping> &
  CounterGettersTypes = {
  counterValue: state => {
    return state.counter;
  },
  doubledCounter: state => {
    return state.counter * 2;
  },
  getPosts: state => {
    return state.data;
  },
  selectedEmployee: state => {
    return state.selectedEmployee;
  }
};
