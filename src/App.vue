<template>
  <div class="layout">
     <el-container>
        <el-aside width="300px"><NavBar/>
        </el-aside>
        <el-container>
           <el-header><TodoHeader/></el-header>
           <el-main>
            <router-view></router-view>
              <!-- <TodoList/> -->
          </el-main>
        </el-container>
      </el-container>
</div>

</template>

<script setup>
import NavBar from './components/NavBar.vue'
import TodoHeader from './components/TodoHeader.vue'

</script>

<style lang="scss" scoped>
.layout{
margin: 0px;
 width:100%;
 height:100vh;
}
.el-container{
  width: 100vw;
  height: 95vh;
  display: flex;
}
.el-header{
 width:100%;
 padding:10px;
 height:100px;
  
}
</style>