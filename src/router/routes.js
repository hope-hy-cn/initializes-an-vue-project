import Tabbar from '@/components/Tabbar'
// 代码切割 路由懒加载
const Home = () => import('@/pages/Home')
const Mall = () => import('@/pages/Mall')
const Category = () => import('@/pages/Category')
const Details = () => import('@/pages/Details')
const Cart = () => import('@/pages/Cart')
const Mine = () => import('@/pages/Mine')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    title: '首页',
    icon: '&#xe663;',
    isTabbar: true, // 用来筛选tabbar上的页面
    components: {
      default: Home,
      tabbar: Tabbar // 有tabbar的页面就加上，没有不加
    }
  }, {
    path: '/mall',
    name: 'mall',
    title: '商城',
    isTabbar: true,
    icon: '&#xe67b;',
    components: {
      default: Mall,
      tabbar: Tabbar
    },
    children: [{
      path: 'category',
      name: 'category',
      component: Category
    }]
  }, {
    path: '/details/:id', // 详情页后面一般有个id
    name: 'details',
    components: {
      default: Details
    },
    props: true
  }, {
    path: '/cart',
    name: 'cart',
    title: '购物车',
    icon: '&#xe656;',
    isTabbar: true,
    components: {
      default: Cart,
      tabbar: Tabbar
    }
  }, {
    path: '/mine',
    name: 'mine',
    title: '我的',
    icon: '&#xe64e;',
    isTabbar: true,
    components: {
      default: Mine,
      tabbar: Tabbar
    }
  }, {
    path: '/login',
    name: 'login',
    components: {
      default: Login
    }
  }, {
    path: '/register',
    name: 'register',
    components: {
      default: Register
    }
  }
]

export default routes
