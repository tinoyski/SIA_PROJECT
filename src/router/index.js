import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/Shop.vue"),
  },
  {
    path: "/details/:idProduct",
    name: "Details",
    component: () => import("../views/Details.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
