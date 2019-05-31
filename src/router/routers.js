
export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'test-report',
    meta: {
      title: '检测报告详情',
    },
    component: () => import('@/views/test-report.vue')
  }
]
