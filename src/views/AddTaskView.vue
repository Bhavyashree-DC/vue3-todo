<template>
    <div class="addTask">
        <h1>Add New Task</h1>

        <div class="inputs">
            <el-input
                v-model="input"
                style="width: 450px"
                placeholder="Add New List Item here"
                clearable
            />
            <el-button type="primary" :icon="Plus" @click="addTask" />
        </div>
    </div>
</template>

<script setup>
import {
  Plus
  } from '@element-plus/icons-vue'
   import { ref } from 'vue';
   import {useStore} from 'vuex';

   const input = ref('');
   const store = useStore();

   const addTask = () =>{
      store.dispatch('postTask', input.value);

      input.value = '';
   }
   
</script>

<style lang="scss" scoped>
.addTask{
    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
    gap:20px;

   margin-top: 20px;

   h1{
      font-size: 1.9rem;
      color:coral;
   }
   .inputs{
      display:flex;
      gap:20px;
      margin:20px;
   }
   .el-input{
     height:50px;
     border-radius:20px ;
   }
   .el-button{
     padding:24px;
     font-size: 1.5rem;
     font-weight: 700;
     
   }
   
}
</style>