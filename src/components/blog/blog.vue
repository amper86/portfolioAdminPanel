<template lang="pug">
  .blog
    h2.title Страница "Блог"
    .container
      .form.col
        h3.form-title Добавить запись
        .row
          app-input(
          type="text",
          placeholder="Название"
          )
        .row
          app-input(
          type="date"
          )
        .row
          textarea.input.blog-textarea(
          type="text",
          placeholder="Содержание"
          )
        .row
          app-button(
          title="Добавить"
          )
</template>

<script>
    export default {
      components: {
        AppButton: require('_common/button/button.vue'),
        AppInput: require('_common/input/input.vue')
      }
    }
</script>

<style src="./blog.scss" lang="scss" scoped>

</style>
