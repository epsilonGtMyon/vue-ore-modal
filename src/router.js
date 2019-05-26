import Vue from 'vue'
import Router from 'vue-router'
import ModalSandbox01 from './views/app01/ModalSandbox01.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modalSandbox01',
      component: ModalSandbox01
    }
  ]
})
