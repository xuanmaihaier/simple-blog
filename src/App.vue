<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
// 初始化本地主题
const store = useStore()
store.dispatch('triggerTheme', store.state.theme)
const themefontColor = computed(() => store.state.themefontColor)
const themeBackground = computed(() => store.state.themeBackground)
const themeSelectColor = computed(() => store.state.themeSelectColor)
</script>

<template>
  <!-- 全局主题 -->
  <a-config-provider>
    <a-row class="main-wrap">
      <a-col>
        <main-siderbar />
      </a-col>
      <a-col>
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
// 全局背景色
.main-wrap {
  background-color: v-bind(themeBackground);
  color: v-bind(themefontColor);
}
:deep(.ant-page-header) {
  &-heading-title,
  &-back-button {
    color: v-bind(themefontColor);
  }
}
:deep(.ant-layout-sider) {
  background: v-bind(themeBackground);
}
:deep(.ant-menu) {
  background: v-bind(themeBackground);
  &-item {
    width: 95% !important;
    margin-right: 5%;
    border-radius: 40px;
  }
}
:deep(.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected) {
  background: v-bind(themeSelectColor);
}
</style>
