import {createApp}from 'vue'
import App from './App.vue'


import router from '@/router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'

const app = createApp(App).use(router)
app.use(store)
app.mount('#app')


