import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const base= axios.create({
  // ¡¡¡¡Cambio aquí!!!! La URL de nuestra DB entre las comillas.
  baseURL: 'https://glacial-everglades-74306.herokuapp.com'
})
Vue.prototype.$http= base;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
