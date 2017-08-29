import Vue from 'vue'
import Router from 'vue-router'

const Hello = r => require.ensure([], () => r(require('@/pages/Hello')), 'Hello')	//统一用懒加载方式

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
