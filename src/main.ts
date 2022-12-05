import { createApp } from 'vue';
import { store, key } from './store';
import App from './App.vue';
import './style.scss';

createApp(App).use(store, key).mount('#app');
