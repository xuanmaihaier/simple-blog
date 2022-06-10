import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { ConfigProvider } from 'ant-design-vue'
export default createStore({
  state: {
    theme: null,
    themeLoading: false,
    themeBackground: '#fff',
    themefontColor: '#000',
  },
  mutations: {
    // 切换主题并保存本地
    trigger_theme(state, theme) {
      state.themeLoading = true
      setTimeout(() => {
        state.themeLoading = false
      }, 500)
      state.theme = theme
      state.themeBackground = theme === 'dark' ? '#333' : '#fff'
      state.themefontColor = theme === 'dark' ? '#fff' : '#000'
      ConfigProvider.config({
        theme: {
          primaryColor: theme,
        },
      })
    },
  },
  actions: {
    triggerTheme({ commit }, theme) {
      commit('trigger_theme', theme)
    },
  },
  getters: {
    theme: (state) => state.theme,
  },
  modules: {},
  plugins: [createPersistedState()],
})