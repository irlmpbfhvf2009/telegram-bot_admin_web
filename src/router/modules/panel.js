import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    mode : 'history',
    path: '/panel',
    component: Layout,
    redirect: '/advertise',
    meta: { title: '功能面板', icon: 'el-icon-s-promotion' },
    alwayShow: true,
    children: [
      {
        path: 'advertise',
        component: createNameComponent(() => import('@/views/main/panel/advertise/index.vue')),
        meta: { title: '广告设置', cache: true, roles: ['admin'] }
      },
    ]
  }
]

export default route