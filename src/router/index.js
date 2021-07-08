import { createRouter, createWebHashHistory } from 'vue-router'
import indexview from '../view/index.vue'
import exampleRoutes from './example'

const routes = [
    { path: '/', component:  indexview},
  ]
  

  const router = createRouter({
    history: createWebHashHistory(),
    routes:[...exampleRoutes,...routes], 
  })

  export default router
