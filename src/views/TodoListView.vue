<template>
    <div class="todo-list-container">
       <div class="list-table">
            <el-tabs v-model="activeTab" class="demo-tabs">
                <el-tab-pane label="All" name="all">

                <el-table v-if="todoLists" :data="todoLists" style="width: 100%">
                        <el-table-column prop="id" label="Id" width="120" />
                        <el-table-column prop="todo" label="Todo" width="420" />
                        <el-table-column prop="completed" label="Status" />
                </el-table>

                <div v-else>
                    <p>No todos available.</p>
                </div>

                </el-tab-pane>
        
                <el-tab-pane label="Completed" name="completed">

                <el-table v-if="completedTodos" :data="completedTodos" style="width: 100%">
                        <el-table-column prop="id" label="Id" width="120" />
                        <el-table-column prop="todo" label="Todo" width="420" />
                        <el-table-column prop="completed" label="Status"  />
                </el-table>

                <div v-else>
                    <p>No completed todos available.</p>
                </div>

                </el-tab-pane>
        
                <el-tab-pane label="Pending" name="pending">
                
                <el-table v-if="pendingTodos" :data="pendingTodos" style="width: 100%">
                        <el-table-column prop="id" label="Id" width="120" />
                        <el-table-column prop="todo" label="Todo" width="420" />
                        <el-table-column prop="completed" label="Status" />
                </el-table>

                <div v-else>
                    <p>No pending todos available.</p>
                </div>

                </el-tab-pane>

            </el-tabs>
        </div>
       
    </div>
  </template>
  
  <script setup>
  import TodoHeader from '../components/TodoHeader.vue';
  import {
  Check
  } from '@element-plus/icons-vue'
  import { computed, onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const activeTab = ref('all');
  
  const todoLists = computed(() => {
    return store.getters.getList;
  });
  
  const completedTodos = computed(() => {
    return store.getters.getList.filter(todo => todo.completed);
  });
  
  const pendingTodos = computed(() => {
    return store.getters.getList.filter(todo => !todo.completed);
  });

  const totalTodos = computed(()=> {
      return store.getters.getList.length;
  });

  const completedPercent = computed(()=>{
       return totalTodos.value ? (completedTodos.value.length / totalTodos.value) * 100 : 0;
  });

  const pendingPercent = computed(() =>{
     return totalTodos.value ? (pendingTodos.value.length / totalTodos.value) * 100 : 0;
  })
  
  onMounted(() => {
    store.dispatch('fetchList');
  });
  </script>

<style lang="scss" scoped>
  .todo-list-container{
     margin:40px;
    .list-header{
        display:flex;
        align-items:center;
        justify-content: space-between;
    }
    .el-tabs{
        margin-right: 180px;
       
    }
    .list-table{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;

        margin:30px;
        
        .el-table {
            font-size:20px;
        }
        .el-tab-pane{
            .el-tab-pane{
                .el-tabs__item {
                font-size: 20px;
                padding-bottom: 10px;
                }
            }
        }
        
    }
      
}
</style>