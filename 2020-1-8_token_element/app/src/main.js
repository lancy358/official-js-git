import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qs from 'qs'
Vue.prototype.$qs=qs
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
