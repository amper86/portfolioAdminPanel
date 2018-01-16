const works = {
  namespaced: true,
  state: {
    data: {}

  },
  actions: {
    addNewWork({ state, rootGetters }, fields) {
      fetch('/addwork', {
        method: 'post',
        body: fields
      })
    }
  }
};


export default works
