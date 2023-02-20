import request from '@/utils/system/request'

// 获取数据api
export function getConfig() {
    return request({
      url: '/getConfig',
      method: 'get',
      baseURL: '/dev',
    })
  }
export function updateConfig(data) {
    return request({
      url: '/updateConfig',
      method: 'post',
      baseURL: '/dev',
      data,
    })
  }
  