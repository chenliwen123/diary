import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router/index'
import store from './store/index'
import axios from '@/utlis/axios.js';

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.config.globalProperties.$axios=axios;
app.mount('#app')
