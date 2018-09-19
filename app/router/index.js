import Vue from 'vue'
import Router from 'vue-router'
import Chart from '@/views/Chart'
import TestPage from '@/views/TestPage'
import TestEvent from '@/views/TestEvent'
import TestLayout from '@/views/TestLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Chart,
      redirect: '/chart/bar'
    },
    {
      path: '/chart/:type',
      name: '图表示例',
      component: Chart,
      props: true
    },
    {
      path: '/test-page',
      name: '测试页面',
      component: TestPage,
      props: true
    },
    {
      path: '/test-event',
      name: '测试事件',
      component: TestEvent,
      props: true
    },
    {
      path: '/test-layout',
      name: '测试布局',
      component: TestLayout,
      props: true
    }
  ]
})
