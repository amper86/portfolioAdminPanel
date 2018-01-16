<template lang="pug">
  section.section
    .blog
      h2.blog-capt {{ pageCapt }}
      .blog-add
        h3.blog-add__capt Добавить статью
        form.blog-add__form
          .blog-add__row
            div.error-message {{ validation.firstError('article.name') }}
            input.blog-add__input(
            type="text"
            name="name"
            placeholder="Название"
            v-model="article.name",
              :class="{error : validation.hasError('addArticle.name')}"
            )
          .blog-add__row
            div.error-message {{ validation.firstError('article.date') }}
            input.blog-add__input(
            type="date"
            name="date"
            v-model="article.date",
              :class="{error : validation.hasError('article.date')}"
            )
          .blog-add__row
            div.error-message {{ validation.firstError('article.text') }}
            textarea.blog-add__textarea(
            name="article text"
            placeholder="Описание"
            v-model="article.text",
              :class="{error : validation.hasError('article.text')}"
            )
          button.blog-add__submit(
          @click.prevent="addArticle(article)"
          ) Сохранить
</template>

<script>
  import { Validator } from 'simple-vue-validator'
  export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
      'article.name': function(value) {
        return Validator.value(value).required('Поле должно быть заполненно')
      },
      'article.date': function(value) {
        return Validator.value(value).required('Поле должно быть заполненно').regex('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])', 'Это не формат даты задумайся бро')
      },
      'article.text': function(value) {
        return Validator.value(value).required('Поле должно быть заполненно')
      }
    },
    data() {
      return {
        pageCapt: 'Страница «Блог»',
        article: {
          name: '',
          date: '',
          text: ''
        }
      }
    },
    methods: {
      addArticle(article) {
        this.$validate().then((success) => {
          if (success) {
            this.$store.commit('addArticle', article);
            this.article.name = '';
            this.article.date = '';
            this.article.text = ''
          }
        })
      }
    }
  }
</script>

<style src="./blog.scss" lang="scss" scoped>

</style>
