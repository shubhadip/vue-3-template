<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is an network page</h1>
  </div>
  <div>
    <div class="elabel">
      <h3>Posts List</h3>
    </div>
    <div class="employee">
      <div v-if="!isFetching">
        <div v-if="empSelected.id">
          {{ empSelected }}
        </div>
        <div v-for="elem in apiDetails" :key="elem" class="elist">
          <div
            @click="selectEmployee(elem)"
            class="eitem"
            style="text-align:left;margin: 10px 40px;border: 1px solid #efefef;padding:10px;border-radius : 10px;"
          >
            <strong>{{ elem.id }}.</strong> {{ elem.body }}
          </div>
        </div>
      </div>
      <div v-else class="loading">
        Loading ...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/use/useStore";
import { usePost } from "@/use/usePost";
import { AllActionTypes } from "@/store/action-types";
import { POSTS } from "@/store/counter/actions";

export default defineComponent({
  name: "Network",
  setup() {
    const store = useStore();
    const { selectEmployee, empSelected } = usePost();

    const apiDetails = computed((): POSTS[] => store.getters.getPosts);
    const isFetching = ref<boolean>(true);

    store.dispatch(AllActionTypes.FETCH_EMPLOYEES).then(() => {
      isFetching.value = false;
    });

    return {
      apiDetails,
      isFetching,
      selectEmployee,
      empSelected
    };
  }
});
</script>
