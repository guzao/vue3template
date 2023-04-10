<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <n-scrollbar style="height: 100vh;">
        <BaseLayout />
        <n-back-top :right="20" />
      </n-scrollbar>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { darkTheme } from "naive-ui";
import type { GlobalTheme } from "naive-ui";
import { BaseLayout } from '@/layouts/index';

const theme = ref<GlobalTheme | null>(null);
const changeTheme = () => (theme.value = theme.value ? darkTheme : darkTheme);
</script>

<style scoped lang="scss"></style>
