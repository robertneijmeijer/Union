import { createWebHistory, createRouter } from "vue-router";
import landingPage from "@/views/landingPage.vue";
import loginView from "@/views/loginView.vue";
import registerView from "@/views/registerView.vue";
import unionCreateView from "@/views/unionCreateView.vue";
import acceptInviteView from "../views/acceptInviteView.vue";
import Cookie from "js-cookie";
import unionView from "@/views/unionView.vue";
import noUnionOverview from "@/views/noUnionOverview.vue";
import unionOverview from "@/views/unionOverview.vue";

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
    name: "union-no-overview",
    component: noUnionOverview,
  },
  {
    path: "/overview",
    name: "union-overview",
    component: unionOverview,
  },
  {
    path: "/union/:unionName",
    name: "union-view",
    component: unionView,
  },
  {
    path: "/union/invite/accept/:id",
    name: "accept-invite",
    component: acceptInviteView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const logout = () => {
  if (Cookie.get("Authorization")) {
    Cookie.remove("Authorization");
  }
  router.push("login");
};

router.beforeEach((to, from, next) => {
  if (
    to.name !== "/" &&
    to.name !== "login" &&
    to.name !== "register" &&
    !Cookie.get("Authorization")
  ) {
    next({ name: "login" });
  } else if (
    (to.name === "login" || to.name === "register" || to.name === "/") &&
    Cookie.get("Authorization")
  ) {
    next({ path: "/overview" });
  } else next();
});

export default router;
