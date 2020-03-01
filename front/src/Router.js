import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Formulario from './components/form/Formulario.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Formulario
    }
  ]
})