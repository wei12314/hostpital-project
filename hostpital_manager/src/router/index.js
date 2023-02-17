import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
