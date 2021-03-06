import Vue from 'vue';
import Vuecons from 'vuecons';
import Vuement from 'vuement';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './utils/highlightjs';

Vue.config.productionTip = false;

Vue.use(Vuement, { colors: { primary: '#2ED573' } });
Vue.use(Vuecons);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
