import jobs from '../../api/jobs'
const state = () => ({
    all:[]
});

const getters = {};
const actions = {
    async fetchSkills({commit}){
        const skills = await jobs.getSkills()
        console.log(skills);
        commit('setSkills', skills);
    }
}

const mutations = {
    setSkills(state, skills){
        state.all = skills;
    }
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}