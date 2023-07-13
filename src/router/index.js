import { createRouter, createWebHistory } from "vue-router";
import FormView from "@/views/FormView";

const routes = [
  {
    name: "FormView",
    path: "/",
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
