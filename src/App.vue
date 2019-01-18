<template>
  <div class="app">
    <div class="app-header">
      <h-header></h-header>
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>
    <div class="app-tabbar">
      <router-view name="tabbar"></router-view>
    </div>
  </div>
</template>

<script>
import HHeader from './components/HHeader'
export default {
  name: 'App',
  components: {
    HHeader
  }
}
</script>
<style lang="scss">
@import './styles/normalize.scss';
@import './styles/base.scss';

// pubclic styles
html,
body {
  height: 100%;
  overflow: hidden;
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;

  &-header {
    height: tovh(45px);
  }

  &-main {
    flex: 1;
    overflow-x: hidden;
  }

  &-tabbar {
    height: tovh(52px);
  }
}
</style>
