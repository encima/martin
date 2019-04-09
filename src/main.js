import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import store from './store/store.js'

const VueMomentLib = require("vue-moment-lib").default;
const GphApiClient = require('giphy-js-sdk-core')

Vue.use(VueMomentLib);
Vue.use(VueMaterial);

Vue.config.productionTip = false

const client = GphApiClient(process.env.VUE_APP_GIPHY_KEY);
store.commit('setGifClient', client)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
