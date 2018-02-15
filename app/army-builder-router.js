// router.js
import Vue from 'vue';
import Router from 'vue-router';
import ABHome from './components/army-builder-home.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/bolt-action', component: ABHome }
    ]
  });
}