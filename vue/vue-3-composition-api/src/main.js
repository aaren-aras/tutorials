import { createApp } from 'vue'
// 3rd-party packages
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import './assets/style.css';
import App from './App.vue'

const app = createApp(App)
app.use(Toast);
app.mount('#app')
// createApp(App).use(Toast).mount('#app') ? 
