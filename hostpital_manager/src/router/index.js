import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import RoomEnvView from "../views/RoomEnvView";
import PatientMessageView from "../views/PatientMessageView";
const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "roomenv",
    path: "/room/enviroment",
    component: RoomEnvView,
  },
  {
    name: "patientmessage",
    path: "/patient-message",
    component: PatientMessageView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
