import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import CommonView from "../layout/CommonView.vue";
import RegisterView from "../views/RegisterView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/home",
      name: "home",
      component: CommonView,
      children: [
        {
          path: "/",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "list",
          component: () => import("../views/ListView.vue"),
        },
        {
          path: "mine",
          component: () => import("../views/mine.vue"),
        }
      ],
    },
  ],
});

export default router;
