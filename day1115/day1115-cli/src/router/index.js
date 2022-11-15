import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookView from "../views/BookView.vue";
import NaverView from "../views/NaverView.vue";
import NaverNewsView from "@/views/naver/NaverNewsView.vue";
import NaverBlogView from "@/views/naver/NaverBlogView.vue";
import NaverShopView from "@/views/naver/NaverShopView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/book",
    name: "book",
    component: BookView,
  },
  {
    path: "/naver",
    name: "naver",
    component: NaverView,
    children: [
      {
        path: "blog",
        name: "naverNews",
        component: NaverNewsView,
      },
      {
        path: "news",
        name: "naverBlog",
        component: NaverBlogView,
      },
      {
        path: "shop",
        name: "naverShop",
        component: NaverShopView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
