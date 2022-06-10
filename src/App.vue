<script setup lang="ts">
import { useStore } from 'vuex'
// 初始化本地主题
const store = useStore()
store.dispatch('triggerTheme', store.state.theme)
</script>

<template>
  <!-- 全局主题 -->
  <a-config-provider>
    <a-row class="main-wrap">
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
        <main-nav />
        <router-link to="/"> home </router-link>
        <router-link to="/profile"> profile </router-link>
        <router-view />
      </a-col>
    </a-row>
  </a-config-provider>
</template>

<style lang="less" scoped>
@import '@/assets/css/main.less';
</style>
