<template>
  <div>I am Component B</div>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "B",
  setup() {
    return {};
  }
});
</script>
