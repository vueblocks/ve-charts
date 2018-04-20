import Vue from 'vue'
import Router from 'vue-router'
import Chart from '@/views/Chart'
import TestPage from '@/views/TestPage'
import TestEvent from '@/views/TestEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Chart
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
    }
  ]
})
