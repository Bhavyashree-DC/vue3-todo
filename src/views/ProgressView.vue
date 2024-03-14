<template>
     <div class="demo-progress">
        <el-progress 
            v-if="totalTodos"
            type="circle" 
            :percentage="completedPercent" 
            status="success"
            >
                <template #default="{ percentage }">
                    <el-button type="success" :icon="Check" circle />
                    <span class="percentage-value">{{ Math.round(percentage) }}%</span>
                </template>
        </el-progress>

        <el-progress 
            v-if="totalTodos"
            type="dashboard" 
            :percentage="pendingPercent"
        >
            <template #default="{ percentage }">
                <span class="percentage-value">{{ Math.round(percentage) }}%</span>
                <span class="percentage-label">Pending</span>
            </template>
        </el-progress>
  </div>
</template>

<script setup>
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
    return store.getters.completedTodos
  });
  
  const pendingTodos = computed(() => {
    return store.getters.pendingTodos
  });

  const totalTodos = computed(()=> {
      return store.getters.totalTodos;
  });

const completedPercent = computed(()=>{
       return totalTodos.value ? (completedTodos.value.length / totalTodos.value) * 100 : 0;
  });

  const pendingPercent = computed(() =>{
     return totalTodos.value ? (pendingTodos.value.length / totalTodos.value) * 100 : 0;
  })
</script>

<style lang="scss" scoped>
 
 .demo-progress{
        margin-top:250px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .percentage-value {
        display: block;
        margin-top: 10px;
        font-size: 20px;
    }
    .percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 18px;
    }
    .demo-progress .el-progress--line {
    margin-bottom: 15px;
    max-width: 600px;
    }
    .demo-progress .el-progress--circle {
    margin-right: 45px;
    }

</style>