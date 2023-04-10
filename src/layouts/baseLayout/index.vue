<template>
  <n-layout >
    <n-layout-header bordered class="fixed z-10">
      <div class="flex justify-between items-center p-1o pr-10 box-border h-[63px]">
        <div></div>
        <div>
          <n-button quaternary> click </n-button>
        </div>
      </div>
    </n-layout-header>
    <n-layout-content class="p-10 box-border mt-[53px]" embedded >
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
