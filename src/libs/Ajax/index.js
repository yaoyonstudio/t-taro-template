import Taro from '@tarojs/taro'

export default (url, method, params) => {
  if (!url) throw new Error('ajax request without url.')
  const _headers = {
    'content-type': 'application/json',
  }
  if (Taro.getStorageSync('token')) {
    _headers['Authorization'] = `Bearer ${Taro.getStorageSync('token')}`
  }

  return new Promise((resolve, reject) => {
    Taro.request({
        url: url,
        data: params,
        method: method,
        header: _headers,
      })
      .then(res => {
        console.log('Ajax Response:', res)
        resolve(res.data)
      })
      .catch(error => {
        console.log('Ajax Error:', error)
        reject(error)
      })
  })
}
