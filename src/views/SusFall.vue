<template>
  <div>
    <div class="elabel">
      <h3>Posts List</h3>
    </div>
    <div class="employee">
      <div v-for="elem in posts" :key="elem" class="elist">
        <div class="eitem">
          {{ elem.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SusFall",
  async setup() {
    const posts = ref(null);
    const data = await fetch("http://jsonplaceholder.typicode.com/posts");
    posts.value = await data.json();

    return {
      posts
    };
  }
});
</script>
