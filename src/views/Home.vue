<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div style="display: flex;flex-direction: column">
      <label style="font-weight: bold;">count: {{ count }}</label>
      <button class="btn" @click="incrementCounter">
        Increment Counter
      </button>
    </div>
  </div>
  <Suspense>
    <template #default>
      <SusFall />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SusFall from "./SusFall.vue";
import { useCounter } from "@/use/useCounter";

export default defineComponent({
  name: "Home",
  components: {
    SusFall
  },
  setup() {
    const { count, incrementCounter } = useCounter();

    return {
      count,
      incrementCounter
    };
  }
});
</script>
