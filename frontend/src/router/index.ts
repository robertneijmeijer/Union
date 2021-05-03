import { createWebHistory, createRouter } from "vue-router";
import landingPage from "@/views/landingPage.vue";
import loginView from "@/views/loginView.vue";
import registerView from "@/views/registerView.vue";
import unionCreateView from "@/views/unionCreateView.vue";
import unionOverView from "@/views/unionView.vue";
import unionOverviewView from "@/views/unionView.vue";

const routes = [
  {
    path: "/",
    name: "landingspage",
    component: landingPage,
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
  {
    path: "/register",
    name: "register",
    component: registerView,
  },
  {
    path: "/createunion",
    name: "createunion",
    component: unionCreateView,
  },
  {
    path: "/union",
    name: "union-overview",
    component: unionOverviewView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
