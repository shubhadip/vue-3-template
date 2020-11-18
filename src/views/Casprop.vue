<template>
  <div>
    <B>
      <component :is="childComponent"></component>
    </B>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import B from "./../components/B.vue";
import C from "./../components/C.vue";

export default defineComponent({
  name: "Test",
  components: {
    B,
    C
  },
  setup() {
    return {
      childComponent: "c"
    };
  }
});
</script>
