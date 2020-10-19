import { RootStateTyping } from "../../index";
import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module
} from "vuex";

import { state } from "./state";
import { State as CounterTypes } from "./types";
import { CounterGettersTypes, getters } from "./getters";
import { CounterMutationsTypes, mutations } from "./mutations";
import { CounterActionsTypes, actions } from "./actions";

export const counterModule1: Module<CounterTypes, RootStateTyping> = {
  state,
  getters,
  actions,
  mutations
};

//setup store type
export type Store<S = CounterTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof CounterMutationsTypes,
    P extends Parameters<CounterMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<CounterMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof CounterGettersTypes]: ReturnType<CounterGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof CounterActionsTypes>(
    key: K,
    payload?: Parameters<CounterActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<CounterActionsTypes[K]>;
};
