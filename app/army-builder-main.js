// main.js
import Vue from 'vue'
import App from './army-builder-app.vue'
import { createRouter } from './army-builder-router.js'

// export a factory function for creating fresh app, router and store
// instances
export function createApp() {
  // create router instance
  const router = createRouter();

  const app = new Vue({
    router,
    // the root instance simply renders the App component.
    render: h => h(App)
  });

  return { app, router };
}
