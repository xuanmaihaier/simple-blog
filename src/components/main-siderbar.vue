<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { SkinOutlined } from '@ant-design/icons-vue'
const store = useStore()
let collapsed = ref<boolean>(false)
let selectedKeys = ref<string[]>(['1'])
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <SkinOutlined />
          <span>广场</span>
        </a-menu-item>
        <a-menu-item key="2">
          <SkinOutlined />
          <span>话题</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </a-layout>
</template>

<style lang="less" scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
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
