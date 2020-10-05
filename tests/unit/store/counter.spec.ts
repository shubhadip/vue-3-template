import { createStore } from "vuex";
import { counterModule1 } from "@/store/counter1/index";
import { AllActionTypes } from "@/store/action-types";
import { AllMutationTypes } from "@/store/mutation-types";
import { counterModule } from "@/store/counter/index";

let store: any;

beforeEach(() => {
  store = (initState: any = {}) =>
    createStore<any>({
      modules: {
        counterModule1,
        counterModule
      },
      state: {
        ...initState
      }
    });
});

test("testing", () => {
  const localstore: any = store({ counter1: 0 });
  (localstore as any).commit(AllMutationTypes.SET_COUNTER1, 10);
  expect(localstore.getters.counterValue1).toBe(10);
  expect(localstore.getters.doubledCounter1).toBe(20);
});

test("testing 2", async () => {
  const localstore: any = store({ counter1: 0 });

  await (localstore as any).dispatch(AllActionTypes.GET_COUTNER1, 100);
  await (localstore as any).dispatch(AllActionTypes.SET_ROOT_DISPATCH, true);

  expect(localstore.getters.counterValue1).toBe(100);
  expect(localstore.getters.doubledCounter1).toBe(200);
  expect(localstore.getters.getRootDispatch).toBe(true);
});
