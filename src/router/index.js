import { createRouter, createWebHistory } from "vue-router";
import ContactViewVue from "../views/ContactView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import RootView from "../views/RootView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: RootView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactViewVue,
    },
  ],
});

export default router;
