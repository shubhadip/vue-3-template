<template>
  <div id="nav">
    <date-picker />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/service">Service</router-link> |
    <router-link to="/compositionapi">Composition Api</router-link> |
    <router-link to="/network">network</router-link> |
    <router-link to="/test">network</router-link> |
    <router-link to="/test">network</router-link> |
    <router-link to="/test">network</router-link> |
  </div>
  <router-view v-slot="slotProps">
    <component :is="slotProps.Component"></component>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Datepicker from "vuejs3-datepicker";
export default defineComponent({
  components: {
    DatePicker: Datepicker
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
