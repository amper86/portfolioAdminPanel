<template lang="pug">
  .tabs
    ul.tabs-list
      li.tabs-item(v-for="tab in tabs")
        router-link(
          :to="tab.href",
          exact-active-class="tab-active"
        ).tabs-link {{tab.name}}
</template>

<script>
  export default {
    data() {
      return {
        tabs : [
          {name: 'Обо мне', href: '/'},
          {name: 'Блог', href: '/blog'},
          {name: 'Мои работы', href: '/works'}
        ]
      }
    }
  }
</script>

<style src="./tabs.scss" lang="scss" scoped>

</style>
