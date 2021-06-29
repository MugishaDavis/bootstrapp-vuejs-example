import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import IconsPlugin from 'bootstrap-vue'
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
