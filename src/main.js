import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

axios.defaults.baseURL = "https://portal.yaramay.com";

app.config.globalProperties.agencyId = "9a340589-328a-4e3b-971a-a8f4056e83ae"; // change this for specific agency

app.use(router, axios, VueSweetalert2);

app.mount("#app");
