<template>
    <div class="todo-container">
        <div class="logo">
            <el-icon><Notebook /></el-icon>
         </div>
        <div class="header">
           <h1>TodoList</h1>
        </div>
        <div class="search-todo">
          <el-input
            v-model="input2"
            style="width: 440px;height: 26px;"
            placeholder="Search here"
            :suffix-icon="Search"
          />
        </div>
    </div>
</template>

<script setup>
 import {
  Notebook,Search
  } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
  .todo-container{
      display: flex;
      align-content:center;
      justify-content: flex-start;
      gap:20px;

      width:100%;
      height: 90px;
      background-color: rgb(0,24,157);
      color:white;
      padding:20px;
      margin-bottom:40px;
      line-height: 40px;
      letter-spacing: 1.2px;

      .logo{
        .el-icon{
             font-size: 60px;
             color:white;
        }
      }
      .search-todo{
         margin-left: 280px;
         padding:6px 0px;
          .el-input{
              height:390px;
          }
      }
      .el-input ,
      .el-input--suffix{
            height: 20px;
      }
      .header h1{
          margin-top: 10px;
          font-size: 32px;
          font-weight: 600;
       }
       .description h5{
                font-size: 20px;
            }
  }
</style>