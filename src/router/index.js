import { createRouter, createWebHashHistory } from 'vue-router'
import indexview from '../view/index.vue'
import diary from '../view/diary.vue'
import exampleRoutes from './example'

const routes = [
    { path: '/', component:  indexview},
    { path: '/diary', component:  diary},
  ]
  

  const router = createRouter({
    history: createWebHashHistory(),
    routes:[...exampleRoutes,...routes], 
  })

  export default router
