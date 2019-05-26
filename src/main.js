import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {ModalDialog} from "./components";


Vue.component(ModalDialog.name, ModalDialog);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
