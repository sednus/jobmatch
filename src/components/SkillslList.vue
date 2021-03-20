<template>
  <div>
    <h5>Pick skills you got: </h5>
    <div class="card">
        <div>
          <button v-for="skill in skills" :key="skill"
                  @click="addSkill(skill)" class="btn btn-success btn-sm">
              {{ skill}} <i class="bi bi-plus-circle-fill"></i>
          </button>
        </div>
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
  /* background: linear-gradient(180deg,rgba(42,172,234,1) 0%,rgba(29,146,227,1) 100%); */
  border-color: black;
}
button{
  margin: 0.1rem;
}
</style>