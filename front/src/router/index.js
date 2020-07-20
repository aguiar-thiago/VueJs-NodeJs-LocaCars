import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cadastrar from '../views/CadastrarCarros.vue'
import AtualizaDeletaCarros from '../views/AtualizaDeletaCarros.vue'
import TodosMeusCarros from '../views/TodosMeusCarros.vue'
import CadastrarClientes from '../views/CadastrarClientes.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cadastrar',
    name: 'Cadastrar',
    component: Cadastrar
  },
  {
    path: '/Atualizar',
    name: 'Atualizar',
    component: AtualizaDeletaCarros
  },
  {
    path: '/ListaCarros',
    name: 'Atualizar',
    component: TodosMeusCarros
  },
  {
    path: '/CadastroClientes',
    name: 'Atualizar',
    component: CadastrarClientes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router