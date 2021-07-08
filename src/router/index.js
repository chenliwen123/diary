import { createRouter, createWebHashHistory } from 'vue-router'
import helloWorld from '../components/HelloWorld.vue'
import exampleRoutes from './example'

const routes = [
    { path: '/', component:  helloWorld},
  ]
  

  const router = createRouter({
    history: createWebHashHistory(),
    routes:[...exampleRoutes,...routes], 
  })

  export default router
