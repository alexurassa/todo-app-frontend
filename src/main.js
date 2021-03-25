import { createApp } from 'vue'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(store)
app.use(BootstrapIconsPlugin)
app.use(router)
app.mount('#app')
