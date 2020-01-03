import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    // component: Chart,
    redirect: '/chart/bar'
  },
  {
    path: '/chart/:type',
    name: '图表示例',
    component: () => import(/* webpackChunkName: "chart" */ '../views/Chart.vue'),
    props: true
  },
  {
    path: '/test-page',
    name: '测试页面',
    component: () => import(/* webpackChunkName: "test-page" */ '../views/TestPage.vue'),
    props: true
  },
  {
    path: '/test-event',
    name: '测试事件',
    component: () => import(/* webpackChunkName: "test-event" */ '../views/TestEvent.vue'),
    props: true
  },
  {
    path: '/test-layout',
    name: '测试布局',
    component: () => import(/* webpackChunkName: "test-layout" */ '../views/TestLayout.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
