<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is an about page</h1>
  </div>
  <div>
    <div class="elabel">
      <h3>Employee List</h3>
    </div>
    <div class="employee">
      <div v-if="!isFetching">
        <div v-for="elem in apiDetails.data" :key="elem" class="elist">
          <div class="eitem">
            {{ elem.employee_name }}
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
import { defineComponent } from "vue";
import { useDataFetcher } from "@/use/useDataFetcher";

export default defineComponent({
  name: "About",
  setup() {
    const { isFetching, apiDetails } = useDataFetcher({
      url: "http://dummy.restapiexample.com/api/v1/employees"
    });

    return {
      isFetching,
      apiDetails
    };
  }
});
</script>
