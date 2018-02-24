// main.js
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './army-builder-app.vue'
import { createRouter } from './army-builder-router.js'
import { createStore } from './army-builder-store.js'

//Vue.config.devtools = true
Vue.use(Vuex)
Vue.use(VueResource);

export function createApp() {
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    // the root instance simply renders the App component.
    render: h => h(App)
  });

  return { app, router };
}
