<template>
  <div>
    <div class="elabel">
      <h3>Posts List</h3>
    </div>
    <div class="employee">
      <div v-for="elem in posts" :key="elem" class="elist">
        <div class="eitem">
          {{ elem.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "SusFall",
  async setup() {
    const posts = ref<any>(null);
    const temp = await axios("http://jsonplaceholder.typicode.com/posts");
    posts.value = temp.data;

    return {
      posts
    };
  }
});
</script>
