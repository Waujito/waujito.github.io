import { createRouter, createWebHistory } from "vue-router";
import ContactViewVue from "../views/ContactView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import RootView from "../views/RootView.vue";

const CatBotComponent = () => import("../views/Projects/CatBotComponent.vue");
const MangaParserComponent = () =>
  import("../views/Projects/MangaParserComponent.vue");

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
    {
      path: "/projects/cat_bot",
      name: "cat_bot",
      component: CatBotComponent,
    },
    {
      path: "/projects/manga_parser",
      name: "manga_parser",
      component: MangaParserComponent,
    },
  ],
});

export default router;
