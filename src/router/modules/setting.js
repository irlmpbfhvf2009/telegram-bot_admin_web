import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting',
    meta: { title: 'setting', icon: 'el-icon-setting' },
    children: [
      {
        path: 'setting',
        component: createNameComponent(() => import('@/views/main/setting/index.vue')),
        meta: { title: '参数设定', icon: 'el-icon-setting', hideClose: true }
      }
    ]
  }
]

export default route