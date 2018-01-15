import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: require('./components/about/about.vue')
  },
  {
    path: "/works",
    component: require('./components/works/works.vue')
  },
  {
    path: "/blog",
    component: require('./components/blog/blog.vue')
  }
];

export default new VueRouter({
  routes,
  mode:"history"
})
