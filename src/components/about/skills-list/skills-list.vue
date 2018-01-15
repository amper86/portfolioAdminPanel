<template lang="pug">
  .skill-group
    h2.title-skill {{skillType}}
    table.table
      skill-item(
        v-for="skill in skills",
        :key="skill.id",
        :skill="skill",
        v-if="checkSkillType(skillType) === skill.type"
      )
</template>

<script>
    export default {
        props: {
          skillType: String,
          skills: Array
        },
        methods: {
          checkSkillType(skillType) {
            switch (skillType) {
              case 'Frontend' :
                return 1;
              case 'Workflow':
                return 2;
              case 'Backend':
                return 3;
            }
          }
        },
        components: {
            skillItem: require('../skills-item/skills-item')
        }
    }
</script>

<style src="./skills-list.scss" lang="scss" scoped>

</style>
