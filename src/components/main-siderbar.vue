<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { SkinOutlined } from '@ant-design/icons-vue'
const router = useRouter()
let collapsed = ref<boolean>(false)
let routers = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/profile',
    name: '我的',
  },
]
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">icon占位</div>
      <a-menu :selectedKeys="[router.currentRoute.value.path]" mode="inline">
        <a-menu-item
          v-for="(item, index) in routers"
          :key="item.path"
          @click="router.push(item.path)"
        >
          <SkinOutlined />
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </a-layout>
</template>

<style lang="less" scoped>
.logo {
  height: 32px;
  margin: 16px;
}
:deep(.ant-layout-sider-trigger) {
  display: none;
}
:deep(.ant-menu-inline .ant-menu-item:after) {
  left: 0;
  right: none;
  border-right: none;
}
:deep(.ant-menu-inline) {
  border-right: none;
}
</style>
