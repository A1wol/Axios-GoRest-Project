import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  //base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/users",
      name: "users",
      component: () => import("../views/userList.vue"),
    },
    {
      path: "/addUser",
      name: "addUser",
      component: () => import("../views/addNewUser.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/editUser/:id",
      name: "editUser",
      component: () => import("../views/editUser.vue"),
    },
  ],
});

export default router;
