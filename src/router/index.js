import { createRouter, createWebHashHistory } from 'vue-router'
import helloWorld from '../components/HelloWorld.vue'

const routes = [
    { path: '/', component:  helloWorld},
  ]
  

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  export default router
