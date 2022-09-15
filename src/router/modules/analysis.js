const routes = [
  {
    path: '/analysis',
    name: 'analysispage',
    redirect: '/analysis/index',
    component: () => import('@/layout/basic-layout.vue'),
    meta: {
      title: '数据分析'
    },
    children: [
      {
        path: '/analysis/index',
        name: 'analysis',
        component: () => import('@/views/analysis/index.vue'),
        meta: {
          title: '数据分析-1',
        },
      }
    ]
  },
]

export default routes;