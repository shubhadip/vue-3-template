<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div style="display: flex;flex-direction: column">
      <label style="font-weight: bold;">counter: {{ counter }}</label>
      <label style="font-weight: bold;"
        >doubledCounter: {{ doubledCounter }}</label
      >
      <button class="btn" @click="getCounter">
        Increment Counter
      </button>
      <button class="btn" @click="resetCounter">
        Reset Counter
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/use/useStore";
import { MutationTypes } from "@/store/counter/mutation-types";
import { AllActionTypes } from "@/store/action-types";

export default defineComponent({
  name: "CompositionAPIComponent",
  setup() {
    const store = useStore();

    const counter = computed(() => store.getters.counterValue);
    const doubledCounter = computed(() => store.getters.doubledCounter);

    function resetCounter() {
      store.commit(MutationTypes.SET_COUNTER, 0);
    }

    async function getCounter() {
      await store.dispatch(AllActionTypes.GET_COUTNER, 256);
    }

    return {
      counter,
      doubledCounter,
      resetCounter,
      getCounter
    };
  }
});
</script>
