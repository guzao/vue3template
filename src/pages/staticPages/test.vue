<template>
  <div>
    <n-card title="" size="medium">
      <div>{{ count }}</div>
      <n-button @click="setCount"> 类型错误 </n-button>
    </n-card>
    <n-card title="" size="medium">
      <div>{{ count }}</div>
      <n-button @click="setCount1"> 查询错误 </n-button>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const count  = ref(1)
const setCount = () => {
  count.value++
  count.get()
}
const setCount1 = () => {
  count.value++
  a
}



</script>

<style lang="scss" scoped>
</style>