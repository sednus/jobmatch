<template>
    <div class="main">
        <div class="row skillsRow">
            <div class="col-sm userSkills">
                <UserSkills />
            </div>
            <div class="col-sm">
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
    margin: 5rem;
    max-height: 40rem;
}
.results{
    margin: 2rem;
    height: 50%;
}
.userSkills{
    max-height: 40rem;
    width: 20%;
}
.main{
    background: linear-gradient(180deg,rgba(42,172,234,1) 0%,rgba(29,146,227,1) 100%);
}
</style>