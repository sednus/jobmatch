<template>
    <div class="results">
        <div>
            <table class="table table-striped" v-if="jobs.length > 0">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Company</th>
                        <th scope="col">Title</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="job in jobs" :key="job.id">
                        <th scope="row"> {{job.id}}</th>
                        <td> {{job.company}} </td>
                        <td> {{job.title}} </td>
                        <td> {{job.score}} </td>                        
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="btn btn-primary" @click="findJobs()">Find Jobs</button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import jobs from '../api/jobs'

export default {
  name: "Results",
  computed: mapState({
      skills: state => state.user.skills
  }),
  data:() => {
      return {
       jobs: []
      }
  }, 
  methods: {
      findJobs(){
          this.jobs = jobs.relevantJobs(this.skills)
          console.log(this.jobs)
      }
  }
  
}
</script>
<style scoped>

.results{
    width: 100%;
}
</style>
