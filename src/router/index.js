import { createRouter, createWebHashHistory } from "vue-router";
import FormView from "@/views/FormView";

const routes = [
  {
    name: "FormView",
    path: "/",
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
