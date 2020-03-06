import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Cadastro from './views/Cadastrar.vue'
import EditarExcluirCarros from './views/Editar.vue'
import MeusVeiculos from './views/MeusVeiculos.vue'

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
      component: Cadastro
    },
    {
      path: '/editar',
      name: 'editar',
      component: EditarExcluirCarros
    },
    {
      path: '/listaDeCarros',
      name: 'listaCarros',
      component: MeusVeiculos
    }
  ]
})