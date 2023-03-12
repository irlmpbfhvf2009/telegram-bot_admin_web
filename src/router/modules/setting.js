import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    mode : 'history',
    path: '/setting',
    component: Layout,
    redirect: '/config',
    meta: { title: 'setting', icon: 'el-icon-setting' },
    children: [
      {
        path: 'config',
        component: createNameComponent(() => import('@/views/main/setting/index.vue')),
        meta: { title: '参数设定', icon: 'el-icon-setting', hideClose: true }
      }
    ]
  }
]

export default route