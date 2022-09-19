const routes = [
  {
    path: '/',
    name: 'workpage',
    redirect: '/work/index',
    component: () => import('@/layout/basic-layout.vue'),
    meta: {
      title: '工作区'
    },
    children: [
      {
        path: '/work/index',
        name: 'work',
        component: () => import('@/views/work/index.vue'),
        meta: {
          title: '工作区-1',
        },
      }
    ]
  },
]

export default routes;