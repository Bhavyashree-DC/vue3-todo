<template>
    <div class="nav-header">
      <h1>Menu</h1>
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
              <el-icon><List /></el-icon>
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

          <router-link to="/progress">
          <el-menu-item index="5">
            <el-icon><Eleme /></el-icon>
              <span>Progress</span>
          </el-menu-item>
          </router-link>
          
          <el-sub-menu index="4">
              <template #title>
                <span>Tags</span>
              </template>
              <el-menu-item-group>
                  <div class="flex gap-5">
                    <el-tag type="primary">Tag 1</el-tag>
                    <el-tag type="warning">Tag 2</el-tag>
                  </div>
                  <!-- <el-button class="button-new-tag" size="small" @click="showInput"> + NewTag </el-button> -->
              </el-menu-item-group>
           </el-sub-menu>  
           <router-link to="/login">
                <el-menu-item index="6">
                    <el-icon><UserFilled /></el-icon>
                  <span>Login</span>
                </el-menu-item>
           </router-link>

                <el-menu-item index="7">
                    <el-icon><UserFilled /></el-icon>
                  <span>Logout</span>
                </el-menu-item>
         </el-menu>
    </el-col>
   </el-row>
</template>
    
    <script setup>
    import { ref } from 'vue'
    import {
      List,
      CirclePlusFilled,
      Calendar,
      Eleme ,
      Expand,
      UserFilled
    } from '@element-plus/icons-vue'
    
    
    </script>
    
    <style lang="scss">
    .nav-header{
       display: flex;
       align-items: center;
       justify-content: space-between;
       gap:10px;
       margin: 40px 30px 0px;
  
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
      .el-sub-menu span,
      a{
       font-size: 24px;
       padding:10px;
       text-decoration: none;
       list-style: none;
      }
   

        .el-button {
          padding:20px;
        }
    
      
    .el-menu-item .el-icon{
       font-size: 36px;
       margin-right: 10px;
    }
    .el-menu-item-group{
        font-size: 1px;
        padding:10px;

    }
    .el-menu-item-group__title {
      // margin-top: 10px;
        list-style: none;
        font-size: 22px;
        text-decoration: none;
      }  
    }
    
    </style>