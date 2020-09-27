import { store, Store } from "./../store";

export function useStore() {
  return store as Store;
}
