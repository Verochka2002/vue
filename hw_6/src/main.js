import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import modal from './plugins/ModalWindow/index.js'

import context from './plugins/ContextMenu/index.js'

Vue.config.productionTip = false

Vue.use(modal)
Vue.use(context)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')