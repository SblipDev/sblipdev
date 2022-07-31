import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Posts from "../views/Posts.vue";
// import Post from "../views/Post.vue";
import Contact from "../views/Contact.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Books from "../views/Books.vue";

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
    component: About,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Posts,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  // {
  //   path: "/blog/:slug",
  //   name: "postd",
  //   component: Post,
  //   props: true,
  // },
  {
    path:"*",
    name:"404",
    component: PageNotFound
  },
  {
    path:"/books/",
    name:"Books",
    component:Books
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name + " | SBlip.dev";
  next();
});

export default router;
