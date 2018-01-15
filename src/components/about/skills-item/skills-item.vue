<template lang="pug">
  tr
    td
      button(
      type="button",
      @click="removeSkill"
      ) -
    td {{skill.name}}
    td
      input(type="text",
      :value="skill.percents",
      maxlength="3"
      )
    td %
</template>

<script>
    export default {
      props: {
        skill: Object
      },
      methods: {
        removeSkill() {
          this.$emit('removeSkill', this.skill.id);
        }
      }
    }
</script>

<style src="./skills-item.scss" lang="scss" scoped>

</style>
