<template lang="pug">
  .admin
    .header
      app-header
    .nav
      tabs
    .content
      about
</template>

<script>

export default {
  components: {
    appHeader: require('./components/header/header'),
    tabs: require('./components/tabs/tabs'),
    about: require('./components/about/about')
  }
}
</script>

<style lang="scss" scoped>
  .admin {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
    background-color: rgba(255,255,255, .58);
    padding: rem(45px) rem(25px);
  }
</style>
