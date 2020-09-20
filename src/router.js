import Vue from 'vue'
import Router from 'vue-router'
import Portada from './views/Portada.vue'
import Sobremi from './views/Sobremi'
import Contacto from './views/Contacto'
import Post from './views/Post'
import Articulo from './views/Articulo'
import notFound from './views/notFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'portada',
      component: Portada
    },
    {
      path: '/sobremi',
      name: 'sobremi',
      component: Sobremi
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/post',
      name: 'entrada',
      component: Post,
      children:[
        {
          path: ':articulo',
          name: Articulo,
          component: Articulo
        }
      ]
    },
    {
      path: '/*',
      name: 'notFound',
      component: notFound
    }
  ]
})
