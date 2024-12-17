import Home from "./Home.vue";
import Index from "./lessons/simple-layout/Index.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/simple-layout", component: Index },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
