<template>
  <div class="home">
    home
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted () {
    this.$http.getSwiper()
      .then(resp => {
        console.log(resp)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/base.scss';
.home {
  text-align: center;
  margin-top: tovh(200px);
}
</style>
