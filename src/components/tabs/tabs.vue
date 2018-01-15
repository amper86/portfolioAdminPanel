<template lang="pug">
  .tabs
    ul.tabs-list
      li.tabs-item(v-for="tab in tabs")
        a.tabs-link(href='') {{tab}}
</template>

<script>
  export default {
    data() {
      return {
        tabs : ['Обо мне', 'Блог', 'Мои работы']
      }
    }
  }
</script>

<style src="./tabs.scss" lang="scss" scoped>

</style>
