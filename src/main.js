import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/tailwind.css'
import i18n from './i18n'
import VueSweetalert2 from 'vue-sweetalert2';
import UUID from 'uuid'

Vue.use(VueSweetalert2, UUID);

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')