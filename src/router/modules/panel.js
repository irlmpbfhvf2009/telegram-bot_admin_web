import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/panel',
    component: Layout,
    redirect: '/panel/advertiseTable',
    meta: { title: '功能面板', icon: 'el-icon-goblet' },
    alwayShow: true,
    children: [
      {
        path: 'advertiseTable',
        component: createNameComponent(() => import('@/views/main/panel/advertise/index.vue')),
        meta: { title: '广告设置', cache: true, roles: ['admin'] }
      },
    ]
  }
]

export default route