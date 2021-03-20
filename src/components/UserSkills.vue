<template>
    <div >
        <!-- <div class="card-header" v-if="skills.length > 0"> Your Skills </div> -->
        <ul class="list-group list-group-flush">
          <li v-for="skill in skills" :key="skill.name" class="list-group-item">
              <span class="card-text skill">{{ skill.name}}</span> &nbsp;
              <span  v-for="i in 5" :key="i">
                  <i class="bi star" :class="{'bi-star-fill':  i <= skill.rating, 'bi-star': i > skill.rating }"
                      v-on:click="updateRating(skill.name, i)"></i>
             </span>
               <button @click="removeSkill(skill.name)"  class="btn btn-outline-danger btn-sm">
                   <i class="bi bi-dash-circle-fill"></i>
               </button>
          </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "UserSkills",
  computed: mapState({
      skills: state => state.user.skills
  }),
  methods: {
     ...mapActions('user', [
      'changeRating', 'removeSkill'
    ]),
    updateRating(name, newRating){
        this.changeRating({skill: name, rating: newRating})
    }
  }
}
</script>

<style scoped>
.star{
    color: rgb(245, 245, 10);
    vertical-align: middle;
}
.star:hover {
    font-size: 1.5rem;
}
li{
    border-bottom: none;
    text-align: justify;
    max-height: 5rem;
}
ul{
    overflow-y: auto;
    max-height: 50rem;
    height: 30rem;
}
button{
    margin-left: 3rem;
}
.skill{
    display: inline-block;
    /* width: 20rem; */
}
</style>