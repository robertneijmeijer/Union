import { createWebHistory, createRouter } from "vue-router";
import landingPage from "@/views/landingPage.vue";
import loginView from "@/views/loginView.vue";
import registerView from "@/views/registerView.vue";
import unionCreateView from "@/views/unionCreateView.vue";
import acceptInviteView from "../views/acceptInviteView.vue";
import unionView from "@/views/unionView.vue";
import unionOverView from "@/views/unionOverView.vue";

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
    component: unionOverView,
  },
  {
    path: "/union/:unionName",
    name: "union-view",
    component: unionView,
  },
  {
    path: "/unions/invite/accept",
    name: "accept-invite",
    component: acceptInviteView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
