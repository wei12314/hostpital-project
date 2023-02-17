import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementPlus from "element-plus";
import * as ElIcon from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

const app = createApp(App);
Object.keys(ElIcon).forEach((key) => {
  app.component(key, ElIcon[key]);
});
app.use(router).use(store).use(ElementPlus).mount("#app");
