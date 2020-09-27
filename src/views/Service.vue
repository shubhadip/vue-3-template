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
      <input v-model="value" placeholder="edit me" />
      <p>Message is: {{ value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/use/useStore";
import { AllMutationTypes } from "@/store/mutation-types";
import { AllActionTypes } from "@/store/action-types";

export default defineComponent({
  name: "Service",
  props: {
    message: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const store = useStore();
    const value = ref(props.message || "");

    const counter = computed(() => store.getters.counterValue1);
    const doubledCounter = computed(() => store.getters.doubledCounter1);
    function resetCounter() {
      store.commit(AllMutationTypes.SET_COUNTER1, 0);
    }

    async function getCounter() {
      await store.dispatch(AllActionTypes.GET_COUTNER1, 100);
    }

    return {
      value,
      counter,
      doubledCounter,
      resetCounter,
      getCounter
    };
  }
});
</script>
