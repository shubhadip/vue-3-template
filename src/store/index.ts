import { createStore } from "vuex";
import { counterModule, Store as CounterState } from "./counter/index";
import { counterModule1, Store as CounterState1 } from "./counter1/index";

export type RootStateTyping = {
  counter: CounterState;
  counter1: CounterState1;
};

export type Store = CounterState<Pick<RootStateTyping, "counter">> &
  CounterState1<Pick<RootStateTyping, "counter1">>;

export const store = createStore({
  modules: {
    counterModule,
    counterModule1
  }
});
