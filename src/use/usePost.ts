import { AllActionTypes } from "@/store/action-types";
import { POSTS } from "@/store/modules/counter/actions";
import { useStore } from "@/use/useStore";
import { computed, Ref } from "vue";

export function usePost(): {
  selectEmployee: (payload: POSTS) => void;
  empSelected: Ref<POSTS>;
} {
  const store = useStore();
  function selectEmployee(payload: POSTS) {
    store.dispatch(AllActionTypes.SELECT_EMPLOYEE, payload);
  }
  const empSelected = computed(() => store.getters.selectedEmployee);

  return {
    selectEmployee,
    empSelected
  };
}
