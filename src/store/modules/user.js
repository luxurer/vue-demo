const user = {

  state: sessionStorage.getItem('userState') ? JSON.parse(sessionStorage.getItem('state')) : {
    user: {
      username: '',
      password:[],
    }
  },

  getters: {
    getUser(state) {
      return state.user;
    }
  }
  ,

  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  }
  ,

  actions: {
    asyncUpdateUser(context, user) {
      context.commit('updateUser', user);
    }
  }
}

export default user;
