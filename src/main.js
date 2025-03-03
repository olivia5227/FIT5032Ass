import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(PrimeVue)
app.use(router)
app.mount('#app')
//createApp(App).mount('#app')
// createApp(App)
//   .use(router)
//   .mount('#app');
  
