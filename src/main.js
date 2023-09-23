import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

axios.defaults.baseURL = 'http://portal.yaramay.com';

app.config.globalProperties.agencyId = '9a31997f-aba0-45df-8415-4cecb49d576d'; // change this for specific agency

app.use(router, axios, VueSweetalert2)

app.mount('#app')
