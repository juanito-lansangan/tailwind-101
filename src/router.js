import Home from "./Home.vue";
import SimpleLayout from "./lessons/simple-layout/Index.vue";
import ResponsiveLayout from "./lessons/responsive-layout/Index.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/simple-layout", component: SimpleLayout },
  { path: "/responsive-layout", component: ResponsiveLayout },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
