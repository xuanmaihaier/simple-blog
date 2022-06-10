import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import 'ant-design-vue/dist/antd.variable.min.css';

createApp(App).use(router).use(store).mount('#app')
