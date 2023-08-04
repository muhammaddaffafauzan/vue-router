import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // <---
import { createStore } from 'vuex';
import store from "./store/index.js";
const app = createApp(App);

app.use(store);
app.use(router).mount("#app");
