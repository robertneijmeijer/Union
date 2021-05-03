import { createApp } from "vue";
import App from "./App.vue";
import { store } from "@/store/store";
import router from "@/router";
import i18n from "./i18n/i18n";

const app = createApp(App).use(i18n);

app.use(store);

app.use(router).mount("#app");

export { i18n };
