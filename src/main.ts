import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { plugin as VueTippy } from "vue-tippy";
import "tippy.js/dist/tippy.css"; // optional for styling
import "tippy.js/themes/translucent.css";
import "tippy.js/animations/scale.css";

const app = createApp(App);

app.use(router);

app.use(
  VueTippy,
  // optional
  {
    directive: "tippy", // => v-tippy
    component: "tippy", // => <tippy/>
    componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
    defaultProps: {
      placement: "top",
      allowHTML: true,
    }, // => Global default options * see all props
  }
);

app.mount("#app");

import "./assets/scss/base.scss";
import "./assets/scss/leftside_nav.scss";
import "./assets/scss/header.scss";
import "./assets/scss/pages.scss";
