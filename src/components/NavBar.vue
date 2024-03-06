<template>
    <div class="header">
      <h1>DashBoards</h1>
      <el-icon><Expand /></el-icon>
    </div>
      <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
        <router-link to="/">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Notebook /></el-icon>
              <span>My TodoList</span>
            </template>
            <el-menu-item-group title="Personal"></el-menu-item-group>
            <el-menu-item-group title="Work"></el-menu-item-group>
          </el-sub-menu>
          </router-link>
  
          <router-link to="/add-task">
            <el-menu-item index="2">
              <el-icon><CirclePlusFilled /></el-icon>
              <span>Add Task</span>
            </el-menu-item>
          </router-link>
  
          <router-link to="/calendar">
            <el-menu-item index="3">
              <el-icon><Calendar /></el-icon>
              <span>Calendar</span>
            </el-menu-item>
          </router-link>
  
          <el-menu-item index="4">
              <el-icon><DeleteFilled /></el-icon>
              <span>Trash</span>
            </el-menu-item>
        </el-menu>
      </el-col>
      </el-row>
    </template>
    
    <script setup>
    import { ref } from 'vue'
    import {
      Notebook,
      CirclePlusFilled,
      Calendar,
      DeleteFilled ,
      Expand
    } from '@element-plus/icons-vue'
    
    
    </script>
    
    <style lang="scss">
    .header{
       display: flex;
       align-items: center;
       justify-content: center;
       gap:10px;
       margin: 40px 0px 0px;
  
        h1{
           font-size: 24px;
           font-weight: 600;
        }
        .el-icon{
          font-size: 29px;
        }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 300px;
      min-height: 600px;
      padding:22px;
  
      .el-menu-item,
      .el-sub-menu,
      .el-sub-menu span{
       font-size: 24px;
       padding:10px;
       text-decoration: none;
       list-style: none;
    }
  
    .el-icon{
       font-size: 22px;
    }
    .el-menu-item-group__title {
        list-style: none;
        font-size: 20px;
        text-decoration: none;
      }  
    }
    
    </style>