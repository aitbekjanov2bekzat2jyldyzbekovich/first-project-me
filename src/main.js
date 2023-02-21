import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
import router from './router'
import Leyout from '../src/components/leyout.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.component('v-leyout',Leyout)
app.use(router)
app.use(pinia)
app.mount('#app')
