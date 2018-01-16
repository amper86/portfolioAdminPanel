<template lang="pug">
  .skill-group
    h2.title-skill {{skillType}}
    ul.list
      skill-item(
        v-for="skill in skills",
        :key="skill.id",
        :skill="skill",
        v-if="checkSkillType(skillType) === skill.type",
        @removeSkill="removeSkill"
      )
    .add-button-container
      button.add-btn(
        type="button",
        @click="addSkill"
      ) Добавить
      input(
        placeholder="Название технологии",
        type="text",
        v-model="newSkill",
        @keydown.enter="addSkill",
        :class="{error: validation.hasError('newSkill')}"
      ).input-add
      .info {{validation.firstError('newSkill')}}
</template>

<script>
    import {mapMutations} from "vuex";
    import {Validator} from "simple-vue-validator";

    export default {
      mixins: [require("simple-vue-validator").mixin],
      validators: {
        newSkill(value) {
          return Validator.value(value).required('Поле должно быть заполнено')
        }
      },
        props: {
          skillType: String,
          skills: Array
        },
      data() {
        return {
          newSkill: ''
        }
      },
        methods: {
          ...mapMutations(['addNewSkill', 'removeExistedSkill']),
          addSkill() {
            this.$validate().then(succes => {
              if(!succes) return;

              this.addNewSkill({
                id: Math.round(Math.random() * 10000),
                name: this.newSkill,
                percents: 0,
                type: this.checkSkillType(this.skillType)
              });

              this.newSkill = "";
              this.validation.reset();
            });

          },
          removeSkill(skillID) {
            this.removeExistedSkill(skillID)
          },
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
