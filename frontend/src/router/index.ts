import { createWebHistory, createRouter } from "vue-router";
import landingPage from "@/views/landingPage.vue";
import loginView from "@/views/loginView.vue";
import registerView from "@/views/registerView.vue";
import forgotPasswordView from "@/views/forgotPasswordView.vue";
import unionCreateView from "@/views/unionCreateView.vue";

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
    path: "/forgot-password",
    name: "forgot-password",
    component: forgotPasswordView,
  },
  {
    path: "/createunion",
    name: "createunion",
    component: unionCreateView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
