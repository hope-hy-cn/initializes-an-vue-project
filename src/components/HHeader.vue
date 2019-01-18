<template>
    <div class="h-header">Header</div>
</template>

<script>
export default {
  name: 'h-header'
}
</script>

<style lang="scss" scoped>
@import '../styles/base.scss';
  .h-header {
    background-color: #00897B;
    height: 100%;
    border-bottom: 1px solid #dedede;
    box-sizing: border-box;
    text-align: center;
    line-height: tovh(45px);
    color: #fff;
  }
</style>
