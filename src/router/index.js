import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const index = () => import('../components/index.vue')

const manger = () => import('../components/manage.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index
    },
    {
      path: '/manger',
      component: manger
    }
  ]
})
