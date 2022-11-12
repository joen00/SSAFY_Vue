import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from "@/views/BoardList";
import BoardView from "@/views/BoardView";
import BoardCreate from "@/views/BoardCreate";
import BoardUpdate from "@/views/BoardUpdate";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "list",
    component :BookList,
  },
  {
    path: "/view",
    name: "view",
    component :BoardView,
  },
  {
    path: "/create",
    name: "create",
    component :BoardCreate,
  },
  {
    path: "/update",
    name: "update",
    component : BoardUpdate,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
