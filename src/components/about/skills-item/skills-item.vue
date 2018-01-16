<template lang="pug">
  .skill
    .remove-container
      button(
      type="button",
      @click="removeSkill"
      ).btn-remove -
    .name {{skill.name}}
    .input-container
      input(type="text",
      :value="skill.percents",
      maxlength="3"
      ).input-rm
    .measure %
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
