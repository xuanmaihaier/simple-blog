<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
// 初始化本地主题
const store = useStore()
store.dispatch('triggerTheme', store.state.theme)
const themefontColor = computed(() => store.state.themefontColor)
const themeBackground = computed(() => store.state.themeBackground)
const themeSelectColor = computed(() => store.state.themeSelectColor)
const themeBorderColor = computed(() => store.state.themeBorderColor)
const themeActiveColor = computed(() => store.state.themeActiveColor)
const themeHoverColor = computed(() => store.state.themeHoverColor)
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
        <router-view class="content-wrap" />
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
  border: 1px solid v-bind(themeBorderColor) !important;
  &-heading-title,
  &-back-button {
    color: v-bind(themefontColor);
  }
}
:deep(.ant-layout-sider) {
  background: v-bind(themeBackground);
  // border: 1px solid v-bind(themeBorderColor);
}
:deep(.content-wrap) {
  border: 1px solid v-bind(themeBorderColor);
}
:deep(.ant-menu) {
  background: v-bind(themeBackground);
  color: v-bind(themefontColor);
  font-weight: 700;
  &-item {
    width: 95% !important;
    margin-right: 5%;
    border-radius: 40px;
  }
  > li:hover {
    background-color: v-bind(themeHoverColor);
    color: v-bind(themefontColor);
  }
}
:deep(.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected) {
  background: v-bind(themeSelectColor);
  color: v-bind(themeActiveColor);
}
:deep(.ant-switch-checked) {
  background: #63e2b790;
}
</style>
