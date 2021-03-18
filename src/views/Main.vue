<template>
    <div class="main">
        <h2>Enter Relevant Skills</h2>
        <div class="row skillsRow">
            <div class="col-sm-6 skillsCol">
                <SkillsList />
            </div>
            <div class="col-sm-6 userSkills">
                <UserSkills />
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
    margin: 5rem;
}
.results{
    margin: 2rem;
}
.userSkills{
    max-height: 40rem;
}
</style>