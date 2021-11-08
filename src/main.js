import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './helpers/filters'

const app = createApp(App);
app.use(store).use(router);

app.config.globalProperties.$filters = filters;

app.mount('#app');
