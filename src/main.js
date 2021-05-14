import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/styles.css";
import Vuelidate from "vuelidate";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome, fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Vuelidate);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAN7RDmwpY1F7Gi1idK2GIkoRVg049EvFo",
    libraries: "places",
  },
});

library.add(faFontAwesome, fab, fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("vue2-google-maps", VueGoogleMaps);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
