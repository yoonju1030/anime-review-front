const state = {
    login: false,
    id: null,
    message: 'Hello Vuex!',
    access_token: null,
    refresh_token: null
}

const mutations = {
    setStatus(state, params) {state.login = params.login},
    setToken(state, params) {
        state.access_token = params.access
        state.refresh_token = params.refresh
    }
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