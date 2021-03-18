import axios from 'axios'


let jobs =[];
const ENDPOINT = "https://api.jsonbin.io/b/5f975ab4076e516c36fbc87f"
export default {

    async getJobs(){
      const res = await axios.get(ENDPOINT)
      jobs = await res.data.job_postings

      jobs.forEach(elem => {
          elem.skills = elem.skills.split(',')
          elem.score = 0
      })

      return jobs
    },

    async getSkills(){
        const skills = new Set();
        if(!jobs.length){
            await this.getJobs()
        }
        jobs.forEach(element => {
            element.skills.forEach(s => skills.add(s))
        });
    
        return skills;
    },

    relevantJobs(skills){
        const matchedJobs = jobs.slice()
        matchedJobs.forEach(job => {
            skills.forEach(s=>{
               if(job.skills.includes(s.name)){
                   job.score+= s.rating
               }
            })
         })

         matchedJobs.sort((a,b) => b.score - a.score)

         return matchedJobs
    }
}