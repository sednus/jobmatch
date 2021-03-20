<template>
    <div class="container">
        <p v-if="skills.length === 0"> To begin, select skills from the list.
             Rate your expertise on each skill then hit the search button.</p>
        <h5 v-if="skills.length > 0"> Rate your expertise per skills </h5>
        <ul class="list-group">
          <li v-for="skill in skills" :key="skill.name" class="list-group-item">
               <button @click="removeSkill(skill.name)"  class="btn btn-outline-danger btn-sm">
                   <i class="bi bi-dash-circle-fill"></i>&nbsp;
               </button>
               &nbsp;
              <span class="card-text skill">{{ skill.name}}</span> &nbsp;
              <span  v-for="i in 5" :key="i">
                  <i class="bi star" :class="{'bi-star-fill':  i <= skill.rating, 'bi-star': i > skill.rating }"
                      v-on:click="updateRating(skill.name, i)"></i>
             </span>
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
    text-align: justify;
}
.container {
  max-height: 25rem;
  overflow: auto;
}
.skill{
    display: inline-block;
}
</style>