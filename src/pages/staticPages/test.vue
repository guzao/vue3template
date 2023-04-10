<template>
  <div>

    <n-button @click="setId(++id)" :loading="loading" class="mb-4">
      获取数据 
    </n-button>

    <div class="grid grid-cols-6 gap-y-5 gap-x-5">
      <n-card v-for="item in state" :key="item.id" :shadow="true">
        <template #header>
          <n-skeleton v-if="loading" text width="80%" />
          <div v-else class="truncate">
            {{ item.title }} 
          </div>
        </template>
        <n-skeleton v-if="loading" text :repeat="6" />
        <template v-else>
          {{ item.body }}
        </template>
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui';
import { getList } from "@/APIS";
import { usePost, useState } from "@/hooks";
import { watch } from 'vue';

const message = useMessage();

const [ id, setId ] = useState(1);

const { state, loading, getData } = usePost<ListType>({ data: [], requestMethods: () => getList({ pageSize: 10 }), message });

watch(id, getData)


</script>

<style lang="scss" scoped></style>
