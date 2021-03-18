const state = () => ({
    skills: []
})

const getters = {
    skills: (state)=> {
        return state.skills
    }
}

const actions = {
    addSkill({commit, state}, skill){
        if(state.skills.length < 10){
           commit('addSkill', skill );
        }
    },
    changeRating({commit, state}, payload){
        const match =  state.skills.find(item=> item.name === payload.skill);
        if(!match){
            commit('addSkill',  payload.skill)
        }
        commit('updateRating', payload);
    },
    removeSkill({commit}, skill){
        commit('removeSkill', skill)
    }
} 

const mutations = {
    addSkill(state, skill) {
        const match =  state.skills.find(item=> item.name === skill);
        if(!match){
            state.skills.push({
                name: skill,
                rating: 3
            })
        }
    },
    updateRating(state, {skill, rating}){
        const match =  state.skills.find(item=> item.name === skill);
        match.rating = rating;
    },
    removeSkill(state, skill){
        const match =  state.skills.find(item=> item.name === skill);
        const i = state.skills.indexOf(match);
        if (i !== -1){
            state.skills.splice(i, 1);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}