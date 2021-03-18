<template>
    <div class="card">
      <div class="card-header"> Skills </div>
        <div>
          <button v-for="skill in skills" :key="skill"
                  @click="addSkill(skill)" class="btn btn-success btn-sm">
              {{ skill}} <i class="bi bi-plus-circle-fill"></i>
          </button>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "SkillsList",
  computed: mapState({
      skills: state => state.skills.all
  }),
  methods:{
    ...mapActions('skills', [
      'fetchSkills'
    ]),
    ...mapActions('user',[
      'addSkill'
    ])
  },
  mounted(){
    this.fetchSkills();
  }
}

</script>
<style scoped>
.card{
  width: 25rem;
  max-height: 100rem;
}
button{
  margin: 0.1rem;
}
</style>