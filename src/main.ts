import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import { HelloWorld } from "vue3-component-library";
// import Datepicker from 'vuejs3-datepicker';

const app = createApp(App);
// console.log(Datepicker);
app.use(HelloWorld);
app.use(store);
app.use(router);
// app.component('DatePicker',Datepicker);

app.mount("#app");
