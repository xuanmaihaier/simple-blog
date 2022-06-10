import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { ConfigProvider } from 'ant-design-vue'
export default createStore({
  state: {
    theme: 'light',
    themeLoading: false,
    themeBackground: '#fff',
    themefontColor: '#000',
    themeSelectColor: '#18a05830',
    themeBorderColor:'rgb(239, 239, 245)',
    themeActiveColor:'#18a058',
    themeHoverColor:'rgba(255, 255, 255, 0.09)'
  },
  mutations: {
    // 切换主题并保存本地
    trigger_theme(state, theme) {
      state.themeLoading = true
      setTimeout(() => {
        state.themeLoading = false
      }, 500)
      state.theme = theme
      state.themeBackground = theme === 'dark' ? 'rgb(16, 16, 20)' : '#fff'
      state.themefontColor = theme === 'dark' ? '#fff' : '#000'
      state.themeSelectColor = theme === 'dark' ? '#63e2b730' : '#18a05830'
      state.themeBorderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.09)' : 'rgb(239, 239, 245)'
      state.themeActiveColor = theme === 'dark' ? '#63e2b7' : '#18a058'
      state.themeHoverColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.09)': 'rgb(243, 243, 245)' 
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
