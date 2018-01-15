const skills = {
  state : {
    data: []
  },
  getters: {
    skills(state) {
      return state.data
    }
  },
  actions: {
    fetchSkills({state}) {
      return fetch("/src/store/modules/data.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
        state.data = data
      });
    }
  }
};

export default skills
