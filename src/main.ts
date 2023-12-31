import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.scss';

import fontAwesome from './models/fontAwesome/fontAwesome';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(fontAwesome);

app.mount('#app');
