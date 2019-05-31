import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0)
  }
  // if (to.matched.some(record => record.meta.requireAuth)) {
  //   if (!isLogin()) {
  //     return next({
  //       path: '/'
  //     })
  //   }
  // }
  // if (to.matched.some(record => record.meta.requireNotAuth)) {
  //   if (isLogin()) {
  //     return next({
  //       path: '/wantreport'
  //     })
  //   }
  // }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(to => {
  window.scrollTo(0, 0)
})

export default router
