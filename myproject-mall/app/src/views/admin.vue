<template>
  <div>
   <div id="apa"> </div>
    <div id="login_register">
    
      <div class="iconfont icon-LandingLogo"></div>
      <h2 >mall - admin</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
      <el-form-item  prop="name">
        <div class="u form" >
          <el-input
            placeholder="请输入用户名"
            prefix-icon="iconfont icon-yonghu"
            clearable
            v-model="ruleForm.name"
            >
          </el-input>
        </div>
      </el-form-item>
       <el-form-item  prop="password">
        <div class="u form">
          <el-input
            placeholder="请输入密码"
            prefix-icon="iconfont icon-suo"
            v-model="ruleForm.password"
            show-password
            clearable
            >
          </el-input>
        </div>
      </el-form-item>
      <el-form-item>
       <div class="btns"><el-button :plain="true" type="primary" @click="submit" class="login">登录</el-button></div>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from '../api/api'
  export default {
    methods:{
      submit(){
        this.$refs.ruleForm.validate( async (valid)=>{
           if (valid) {
             const data=await login({
               name:this.ruleForm.name,
               password:this.ruleForm.password
             })
             if(data.code===0){
              //  console.log(data)
               this.name=data.name
                this.$router.push('/public')
             }else{
               this.$message.error('登陆失败')
             }
           }else{
              this.$message.error('错了');
            }  
             
        });
            // this.$router.push('/home')
           
      }
    
  },
  data() {
      return {
        name:null,
        ruleForm: {
          name: 'penglan',
          password:'12345678'
        },
        rules: {
          name: [
            { required: true, message: '请输入登录名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ]
        }
      }
    }
  }
</script>

<style>  

@import '../assets/font_1606319_c0x877lsht8/iconfont.css';
  *{
    margin:0;
    padding:0
  }
 #apa{
   width: 100vw;
   height: 220px;
   margin-top:250px;
   background:url('../assets/img/background.jpg') center center no-repeat;
   background-size: cover;
   z-index:1 ;
 }
  #login_register{
      background:white;
      width: 350px;
      height: 300px;
     box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
      border-top:5px solid #409eff;
      border-radius: 15px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      z-index:2

  }  
  
  .icon-LandingLogo{
    font-size: 30px;
    color:#409eff
  }
  #login_register .u{
    /* border :1px solid #409eff; */
    background: rgb(237, 243, 245);
    width: 220px;
    height: 35px;
    border-radius: 3px;
    line-height: 35px;
    text-align: center;
    display: flex;
  }
  .iconfont {
    color: #409eff
  }
  #login_register .u .el-input{
    border: none;
    outline: none;
  font-size: 16px;
  
  background: rgb(237, 243, 245);
  }
  #login_register h2{
    color:#409eff;
  }
  .btns button{
   
    border :1px solid #409eff;
    width: 220px;
    height: 35px;
    border-radius: 3px;
    background:  #409eff;
    color:cornsilk;
    font-size: 16px
  }
.u .el-input--suffix .el-input__inner {
  width: 220px;
}
</style>