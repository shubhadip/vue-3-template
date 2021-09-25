<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 @click="test">This is an about page</h1>
    <test-world></test-world>
    <hello-world></hello-world>
  </div>
  <div></div>
</template>

<script lang="ts">
import { TestWorld } from "vue3-component-library/components/testworld";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Test",
  components: {
    TestWorld
  },
  data() {
    return {};
  },
  methods: {
    test() {
      this.$store;
      console.log(this.$toasted);
    }
  }
});
</script>
