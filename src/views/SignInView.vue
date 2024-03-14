<template>
    <div class="container">
        <div class="input-container">
            <div class="header">
                <h1>Login</h1>
                <span>Welcome Back,Please Login to<br> your account</span>
            </div>
            <el-form
                ref="ruleFormRef"
                style="max-width: 600px"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                class="demo-ruleForm"
                :size="formSize"
                status-icon
            >
                <el-form-item label="Username" prop="name">
                    <el-input v-model="ruleForm.username" />
                </el-form-item>
                <el-form-item label="Password" prop="name">
                    <el-input v-model="ruleForm.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        Login
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="logo">
            <img src="../assets/login_img.webp" alt="logo">
        </div>
    </div>
</template>

<script setup>

import { reactive, ref } from 'vue'

const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  username: 'hbingley1',
  password: 'CQutx25i8r'
})

const rules = reactive({
  username: [
    { required: true, message: 'Please enter username', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please enter Password', trigger: 'blur' },
  ],
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ruleForm)
    })
    .then(res => res.json())
    .then((data) =>{
        localStorage.setItem('Auth',JSON.stringify(data))
    });
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap:40px;

    margin:30px;

   .input-container{
        margin:40px;
        padding:20px;
        .header{
            h1{
                font-size: 3.9rem;
                font-weight: 700;
                margin:30px 0px;
                letter-spacing: 1.1px;
            }
            span{
                margin:50px 0px;
                letter-spacing: 1.1px;
                font-size: 1.5rem;
            }
        }
    }
 
        .el-form{
            margin: 30px 0px 20px;
        
        // validation part 

        .el-input{
             width:320px;
             height:40px;
             font-size: 16px;
        }
        .el-button{
             width:400px;
             height: 50px;
             padding:10px;
             font-size: 20px;
        }

    }
   
   .forgot-password{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin:10px 10px;
    
      .el-checkbox label{
        font-size: 24px;
      }
      h4{
         font-size: 18px;
         text-decoration: none;
         list-style: none;
         color: rgb(95, 198, 193);
      }
   }
   .sign-up{
      margin: 40px 10px;
      font-size: 1rem;
      letter-spacing: 0.7px;
   }
   .logo img{
    margin-top: 30px;
     width: 600px;
     height: 600px;
   }
}

</style>