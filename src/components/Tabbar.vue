<template>
   <ul class="h-tabbar">
     <router-link
        v-for="route in tabbarBtn"
        :key="route.name"
        :to="route.path"
        tag="li"
        class="h-tabbar-item"
     >
       <div class="icon">
         <i class="iconfont" v-html="route.icon"></i>
       </div>
       <div class="title">{{route.title}}</div>
     </router-link>
   </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'tabbar',
  data () {
    return {
      tabbarBtn: routes.filter(item => item.isTabbar === true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/base.scss';
  @font-face {
    font-family: 'iconfont';  /* project id 967809 */
    src: url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.eot');
    src: url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.woff') format('woff'),
    url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.svg#iconfont') format('svg');
  }
.h-tabbar {
  background-color: #00897B;
  height: 100%;
  display: flex;

  &-item {
    text-align: center;
    color: #80CBC4;
    width: 25%;

    &.router-link-active{
        color: #64FFDA;
    }
    > .icon {
      height: tovh(32px);
      line-height: tovh(32px);
      > .iconfont {
          font-family: 'iconfont';
          font-size: tovh(20px);
      }
    }
    > .title {
      font-size: tovh(14px);
    }
  }
}
</style>
