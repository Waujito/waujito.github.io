import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

import "./assets/scss/base.scss";
import "./assets/scss/leftside_nav.scss";
import "./assets/scss/header.scss";
import "./assets/scss/pages.scss";
