import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import globals from '../globals';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const title = document.querySelector('title');
  title.innerHTML = `${to.name} - ${globals.app}`;
  next();
});

export default router;
