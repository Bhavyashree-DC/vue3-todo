<template>
    <div>
      <el-calendar v-model="value" />
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const value = ref(new Date());
  </script>