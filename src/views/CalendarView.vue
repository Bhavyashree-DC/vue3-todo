<template>
    <div class="calendar">
      <el-calendar v-model="value" />
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const value = ref(new Date());
  </script>

  <style lang="scss" scoped>
  .calendar{
     display:flex;
     align-items: center;
     justify-content: center;
  }
  .el-calendar{
    margin: 30px 10px;
     width:990px;
     height: 990px;
  }
  </style>