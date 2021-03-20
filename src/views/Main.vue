<template>
    <div class="main">
        <div class="banner">
            <h1>Job Match</h1>
        </div>
        <div class="row skillsRow">
            <div class="col-sm userSkills">
                <UserSkills />
            </div>
            <div class="col-3">
            </div>
            <div class="col-sm skillsCol">
                <SkillsList />
            </div>
        </div>
        <div class="row results">
            <Results />
        </div>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import UserSkills from '../components/UserSkills'
import SkillsList from '../components/SkillslList'
import Results from '../components/Results'
import jobs from '../api/jobs'
import {mapState} from 'vuex'


export default {
  name: "Main",
  components: {
      SkillsList,
      UserSkills,
      Results
  },
  created(){
      this.fetchJobs()
  },
   computed: mapState({
      skills: state => state.user.skills
  }),
  methods: {
      fetchJobs: async ()=> {
          const j = await jobs.getJobs();
          const skills = await jobs.getSkills();
          console.log(j);
          console.log(skills);
      },
  }
}
</script>
<style>
.skillsRow{
    margin: 2rem;
    max-height: 30%;
}
.skillCol{
    max-height: 200px;
}
.results{
    margin: 2rem;
    height: 50%;
}
.userSkills{
    max-height: 40rem;
    width: 20%;
}
.banner{
    text-align: center;
    color: whitesmoke;
    padding: 1rem;
    background: linear-gradient(180deg,rgba(42,172,234,1) 0%,rgba(29,146,227,1) 100%);
}
</style>