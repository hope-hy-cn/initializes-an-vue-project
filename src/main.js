// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入router配置文件
import router from './router'

// 引入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 把所有的请求方法导入并赋值给$http
import * as $http from './requests'
// 把$http绑定到Vue的原型上，这样就可以在项目中使用 this.$http.方法()来调用接口
Vue.prototype.$http = $http

Vue.config.productionTip = false

// 全局注册MintUI
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
