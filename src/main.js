import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//componets globlais
import IconeItem from './components/IconeItem.vue';

//utils
import UtilFormataData from './utils/utilFormataData.js';

const app = createApp(App);

//componets globlais
app.component('icone-item', IconeItem);

//utils
//Utils adicionadas
app.config.globalProperties.$formatarDataNomeMes =
  UtilFormataData.formatarDataNomeMes;

app.use(store).use(router).mount('#app');
