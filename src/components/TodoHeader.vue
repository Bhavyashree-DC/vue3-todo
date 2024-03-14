<template>
    <div class="todo-container">
       <div class="todo">
          <div class="logo">
              <el-icon><List /></el-icon>
          </div>
          <div class="header">
            <h1>TodoList</h1>
          </div>
       </div>
        <div class="search-todo">
          <el-input
            v-model="input2"
            style="width: 540px;height: 46px;"
            placeholder="Search here"
            :suffix-icon="Search"
          />
        </div>
    </div>
</template>

<script setup>
 import {
  List,Search
  } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
  .todo-container{
      display: flex;
      align-content:center;
      justify-content: space-between;
      gap:20px;

      width:100%;
      height: 90px;
      background-color: rgb(0,24,157);
      color:white;
      padding:20px;
      margin-bottom:40px;
      line-height: 40px;
      letter-spacing: 1.2px;

      .todo{
          display: flex;
          align-items: center;
          justify-content: center;
          .logo{
            .el-icon{
                font-size: 60px;
                color:white;
            }
          }
          .header h1{
            margin-top: 10px;
            font-size: 32px;
            font-weight: 600;
          }
      }
      .search-todo{
        display: flex;
        align-items: center;
        justify-content: center;
          .el-input{
            font-size:20px;
           border-radius: 20px;
           background-color:rgb(0,24,157);
           color:white;
          }
      }
  }
</style>