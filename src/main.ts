import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import { TestWorld } from 'vue3-component-library/dist/esm/testworld';
import { HelloWorld } from 'vue3-component-library';

const app = createApp(App)
app.component('test-world', TestWorld)

app.use(HelloWorld)
app.use(store)
app.use(router)

app.mount("#app");
