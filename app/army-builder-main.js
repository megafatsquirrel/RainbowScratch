// main.js
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './army-builder-app.vue'
import { createRouter } from './army-builder-router.js'

//Vue.config.devtools = true
Vue.use(Vuex)
Vue.use(VueResource);
// export a factory function for creating fresh app, router and store
// instances
export function createApp() {
  const store = new Vuex.Store({
    state: {
      armyData: {}
    },
    mutations: {
      updateArmyObject (state, data) {
        state.armyData = data;
      }
    },
    actions: {
      getNationArmy(context) {
        return new Promise((resolve) => {
          Vue.http.get('/rs/getGermanArmyData').then(response => {
            context.commit('updateArmyObject', response.body);
            resolve();
          }, response => {
            // error callback
          });
        });
      }
    },
    getters: {
      returnArmyData: state => {
        return state.armyData
      }
    }
  });
  // create router instance
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    // the root instance simply renders the App component.
    render: h => h(App)
  });

  return { app, router };
}
