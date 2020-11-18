import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/network",
    name: "Network",
    component: () =>
      import(/* webpackChunkName: "network" */ "../views/Network.vue")
  },
  {
    path: "/service",
    name: "Service",
    component: () =>
      import(/* webpackChunkName: "service" */ "../views/Service.vue")
  },
  {
    path: "/compositionapi",
    name: "CompositionApi",
    component: () =>
      import(/* webpackChunkName: "cc" */ "../views/CompositionComponent.vue")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "test" */ "../views/Test.vue")
  },
  {
    path: "/casprop",
    name: "Casprop",
    component: () =>
      import(/* webpackChunkName: "cprop" */ "../views/Casprop.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
