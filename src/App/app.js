import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router'; 

import routes from '../routes';

const app_router = createRouter({
    routes:routes,
    history:createWebHistory()
});
createApp(App)
.use(app_router)
.mount('#app')
