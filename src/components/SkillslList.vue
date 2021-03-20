<template>
  <div>
    <h5>Pick skills that match your experience </h5>
    <div class="container">
      <ul class="list-group">
        <li class="list-group-item" v-for="skill in skills" :key="skill">
          <button class="btn btn-outline-success btn-sm" @click="addSkill(skill)">
            <i class="bi bi-plus-circle-fill"></i>
            </button>
          &nbsp;<span> {{skill}} </span>
        </li>
      </ul>
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
ul{
  max-height: 30rem;
}
.container {
  max-height: 25rem;
  overflow: auto;
}
.card{
  width: 25rem;
  max-height: 100rem;
  border-color: black;
}
</style>