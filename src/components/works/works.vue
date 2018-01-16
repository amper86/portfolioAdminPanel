<template lang="pug">
  .works
    .works-capt
      h2.work-capt__text Страница «Добавления работ»
    .works-body
      h2.works-body__capt Добавить работу
      form.works-form(
        @submit.prevent="fileLoad(work)"
      )
        .works-form__row
          div.error-message {{ validation.firstError('work.name') }}
          input.works-form__input(
          type="text"
          name="article name"
          placeholder="Название проекта"
          v-model="work.name",
            :class="{error : validation.hasError('work.name')}"
          )
        .works-form__row
          div.error-message {{ validation.firstError('work.tech') }}
          input.works-form__input(
          type="text"
          name="article tech"
          placeholder="Технологии"
          v-model="work.tech",
            :class="{error : validation.hasError('work.tech')}"
          )
        .works-form__row
          div.error-message {{ validation.firstError('work.link') }}
          input.works-form__input(
          type="text"
          name="article link"
          placeholder="Ссылка на проект"
          v-model="work.link",
            :class="{error : validation.hasError('work.link')}"
          )
        .works-form__row
          label.works-form__label
            .works-form__shadow-img
            span.works-form__shadow-text Загрузть картинку
            input.works-form__inputload(
            type="file",
              @change="updateImg($event)"
            )
        input.works-form__submit(
        type="submit"
        value="Сохранить"
        )
</template>

<script>
  import { Validator } from 'simple-vue-validator'
  export default {
    mixins: [require('simple-vue-validator').mixin],
    data() {
      return {
        work: {
          name: '',
          tech: '',
          link: '',
          file: ''
        }
      }
    },
    validators: {
      'work.name': function(value) {
        return Validator.value(value).required('Напишите название проекта')
      },
      'work.tech': function(value) {
        return Validator.value(value).required('Опишите технологии')
      },
      'work.link': function(value) {
        return Validator.value(value).required('Напишите ссылку на проект')
      }
    },
    methods: {
      updateImg(event) {
        this.work.file = event.target.files[0]
      },
      fileLoad(work) {
        this.$validate().then((success) => {
          if (success) {
            this.$store.commit('fileLoad', work);
            this.work.name = '';
            this.work.tech = '';
            this.work.link = ''
          }
        })
      }
    }
  }
</script>

<style src="./works.scss" lang="scss" scoped>

</style>
