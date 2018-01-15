<template lang="pug">
  .works
    h2.title Страница "Мои работы"
    .form
      h3.form-title Добавить работу
      .row
        app-input(
        placeholder="Название проекта"
        type="text"
        )
      .row
        app-input(
        placeholder="Технологии"
        type="text"
        )
      .row
        label.upload
          input.type-file(
          type="file",
          )
          .upload__icon
          .upload__text Загрузить картинку
        div.error-message {{validation.firstError('fields.file')}}
      .row
        app-button(
        title="Добавить",
          :disabled="validation.hasError('fields.file')",
        )
</template>

<script>
  import { Validator } from 'simple-vue-validator'

  export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
      'fields.file': (value) => {
        return Validator.custom(() => {
          if (Validator.isEmpty(value))
            return 'Загрузите картинку'
        })
      }
    },
    components: {
      AppButton: require('_common/button/button.vue'),
      AppInput: require('_common/input/input.vue')
    }
  }
</script>

<style src="./works.scss" lang="scss" scoped>

</style>
