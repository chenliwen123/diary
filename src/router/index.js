import { createRouter, createWebHashHistory, onBeforeRouteLeave } from 'vue-router'
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

  router.beforeEach( (to,from) => {
    console.log(from) // 从哪里来
    console.log(to) // 到哪里去
    // next() 可以不写 return false 就是停止执行
  })

  export default router
