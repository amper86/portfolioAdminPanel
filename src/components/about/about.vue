<template lang="pug">
  .about
    h2.title Страница "Обо мне"
    skills-list(
      v-for="(skillType, index) in skillsTypes",
      :key="index",
      :skillType="skillType",
      :skills="skills"
    )
    button.save-button(
    type="button"
    ) Сохранить
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  export default {
    data() {
      return {
        skillsTypes: ['Frontend', 'Backend', 'Workflow']
      };
    },
    computed: {
      ...mapGetters(['skills'])
    },
    methods: {
      ...mapActions(['fetchSkills'])
    },
    created() {
      this.fetchSkills();
    },
    components: {
      skillsList: require('./skills-list/skills-list')
    }
  }
</script>


<style src="./about.scss" lang="scss" scoped>

</style>
