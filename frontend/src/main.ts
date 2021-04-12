import {createApp} from "vue";
import App from "./App.vue";
import {store} from "@/store/store";
import router from "@/router";
import i18n from "./i18n"

const app = createApp(App);

app.use(store);

app.use(i18n);

app.use(router).mount("#app");
