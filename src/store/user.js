const state = {
    login: false,
    id: null,
    message: 'Hello Vuex!'
}

const mutations = {
    setStatus(state, params) {state.login = params.login}
}

const getters = {
    getLoginStatus(state) {return state.login},
    getUserId(state) {return state.id}
}

const userStore = {
    namespaced: true,
    state: state,
    mutations: mutations,
    action: {},
    getters: getters
}

export default userStore