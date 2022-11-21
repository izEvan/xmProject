import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入swiper
import VAS from 'vue-awesome-swiper'
Vue.use(VAS)
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
