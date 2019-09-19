import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import './assets/tailwind.css';
import i18n from './i18n';
import VueSweetalert2 from 'vue-sweetalert2';
import UUID from 'uuid';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper)
Vue.use(VueSweetalert2);
Vue.use(UUID);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');