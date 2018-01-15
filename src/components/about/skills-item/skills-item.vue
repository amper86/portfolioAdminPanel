<template lang="pug">
  tr
    td
      button(type="button") -
    td {{skill.name}}
    td
      input(type="text",
      :value="skill.percents")
    td %
</template>

<script>
    export default {
      props: {
        skill: Object
      }
    }
</script>

<style src="./skills-item.scss" lang="scss" scoped>

</style>
