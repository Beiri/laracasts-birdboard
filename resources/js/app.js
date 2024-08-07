import "./bootstrap";

import Vue from "vue";
import VModal from "vue-js-modal";

Vue.use(VModal);

Vue.component(
    "theme-switcher",
    require("./components/ThemeSwitcher.vue").default
);
Vue.component(
    "new-project-modal",
    require("./components/NewProjectModal.vue").default
);
Vue.component("dropdown", require("./components/Dropdown.vue").default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    el: "#app",
});
