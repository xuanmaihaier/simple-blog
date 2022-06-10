<script setup lang="ts">
import { watch, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { SkinOutlined } from '@ant-design/icons-vue'
const store = useStore()
const router = useRouter()
let inHome = ref<any>('')
// 返回按钮只要不在首页存在
watch(
  () => router,
  (newValue) => {
    if (
      (newValue.currentRoute.value, newValue.currentRoute.value.name === 'home')
    ) {
      inHome = 'none'
    } else {
      inHome = null
    }
  },
  { deep: true }
)

const switchTheme = (checked: boolean | string | number, event: Event) => {
  store.dispatch('triggerTheme', checked)
}
const back = () => {
  router.go(-1)
}
</script>

<template>
  <a-page-header
    :style="`
      border: 1px solid rgb(235, 237, 240);
      min-width: 500px;
      padding: 6px 24px;
      background-color: ${store.state.themeBackground};
    `"
    :ghost="false"
    :title="router.currentRoute.value.meta.title"
    :sub-title="router.currentRoute.value.meta.subtitle"
    @back="back"
  >
    <template #extra>
      <a-switch
        v-model:checked="store.state.theme"
        checkedValue="dark"
        unCheckedValue="light"
        size="small"
        @click="switchTheme"
        :loading="store.state.themeLoading"
      >
        <template #checkedChildren><skin-outlined /></template>
        <template #unCheckedChildren><skin-outlined /></template>
      </a-switch>
    </template>
  </a-page-header>
</template>

<style lang="less" scoped>
:deep(.ant-page-header-back) {
  display: v-bind(inHome);
}
:deep(.ant-page-header-heading-title) {
  font-size: 18px;
  font-weight: normal;
}
:deep(.ant-page-header-heading-extra) {
  margin: 8px 0;
}
</style>
