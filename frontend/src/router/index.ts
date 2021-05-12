import { createWebHistory, createRouter } from "vue-router";
import landingPage from "@/views/landingPage.vue";
import loginView from "@/views/loginView.vue";
import registerView from "@/views/registerView.vue";
import unionCreateView from "@/views/unionCreateView.vue";
import acceptInviteView from "../views/acceptInviteView.vue";
import unionOverviewView from "@/views/unionView.vue";
import Cookie from "js-cookie";

const routes = [
  {
    path: "/",
    name: "/",
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


router.beforeEach((to, from, next) => {
  if (to.name !== "/" && to.name !== "login" && to.name !== "register" && !Cookie.get("Authentication")) next({ name: "login" }); else next();
});


export default router;
