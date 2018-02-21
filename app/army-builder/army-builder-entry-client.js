import { createApp } from './army-builder-main.js'

const { app } = createApp()

// this assumes App.vue template root element has `id="app"`
app.$mount('#app')