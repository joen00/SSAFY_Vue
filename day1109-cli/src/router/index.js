import Vue from 'vue'
import VueRouter from 'vue-router'
import BookCreate from "@/views/BookCreate";
import BookList from "@/views/BookList";
import BookView from "@/views/BookView";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
  component: BookList,
  },
  {
    path: "/create",
    name:"aaa",
    component: BookCreate,
  },
  {
    path: "/view/:isbn",
    name: "bookview",
    component: BookView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
