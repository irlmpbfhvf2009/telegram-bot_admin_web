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

export function groupCategory(data) {
  return request({
    url: '/groupCategory',
    method: 'post',
    baseURL: '/dev',
    data
  })
}
export function getAdvertiseData(data) {
  return request({
    url: '/getAdvertiseData',
    method: 'post',
    baseURL: '/dev',
    data
  })
}
export function updateAdvertiseData(data) {
  return request({
    url: '/updateAdvertiseData',
    method: 'post',
    baseURL: '/dev',
    data
  })
}

  