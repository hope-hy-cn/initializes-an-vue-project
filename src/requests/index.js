// 统一管理所有的请求，方便维护

// 引入axios， 用于ajax请求
import axios from 'axios'
// 从mint-ui中引入两个组件，用于提示（一个显示加载中，一个用于加载失败报错提示）
import { Indicator, Toast } from 'mint-ui'

const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/121304'
})

// 拦截请求参数
ajax.interceptors.request.use(config => {
  // 显示'加载中…'
  Indicator.open('加载中…')
  return config
})
// 拦截响应
ajax.interceptors.response.use(resp => {
  // 隐藏'加载中…'
  Indicator.close()

  if (resp.data.code === 200) {
    return resp.data.data
  } else {
    // 显示一个错误信息，在3s后自动隐藏
    Toast({
      message: '请求出错',
      duration: 3000
    })
  }
})

// 获取首页轮播图方法
export const getSwiper = () => {
  return ajax.get('/api/v1/swiper')
}

// 获取首页通知方法
export const getNotice = () => {
  return ajax.get('/api/v1/notice')
}
