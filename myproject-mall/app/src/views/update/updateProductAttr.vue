<template>
  <div style="width:800px;margin-left:150px" class="card" >
    <el-card class="box-card" >
     
      <div style="margin-top:20px " >
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm Form"
        >
         
          <el-form-item label="属性名称:" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入商品名称"></el-input>
          </el-form-item> 
          <el-form-item label="商品类型:" prop="class">
            <el-select v-model="ruleForm.class" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="分类筛选样式:"  prop="radio">
                <el-radio v-model="ruleForm.radio" label="1">普通</el-radio>
                <el-radio v-model="ruleForm.radio" label="2">颜色</el-radio>
            </el-form-item>
           <el-form-item label="能否进行检索:"  prop="radio1">
                <el-radio v-model="ruleForm.radio1" label="1">不需要检索</el-radio>
                <el-radio v-model="ruleForm.radio1" label="2">关键字检索</el-radio>
                <el-radio v-model="ruleForm.radio1" label="3">范围检索</el-radio>
            </el-form-item>
            <el-form-item label="商品的关联性:"  prop="radio2">
                <el-radio v-model="ruleForm.radio2" label="1">是</el-radio>
                <el-radio v-model="ruleForm.radio2" label="2">否</el-radio>
            </el-form-item>
             <el-form-item label="属性是否可选:"  prop="radio3">
                <el-radio v-model="ruleForm.radio3" label="1">唯一</el-radio>
                <el-radio v-model="ruleForm.radio3" label="2">单选</el-radio>
                <el-radio v-model="ruleForm.radio3" label="3">复选</el-radio>
            </el-form-item>
             <el-form-item label="录入方式:"  prop="radio4">
                <el-radio v-model="ruleForm.radio4" label="1">手工录入</el-radio>
                <el-radio v-model="ruleForm.radio4" label="2">从下面列表中选择</el-radio>
            </el-form-item>
          <el-form-item  label="属性值列表:" prop="textarea1">
              <el-input
              v-model="ruleForm.textarea1"
              type="textarea"
              autosize
              placeholder="请输入内容"
            >
              </el-input>
          </el-form-item>
          <el-form-item label="是否手动新增:"  prop="radio5">
                <el-radio v-model="ruleForm.radio5" label="1">是</el-radio>
                <el-radio v-model="ruleForm.radio5" label="2">否</el-radio>
            </el-form-item>
          <el-form-item label="排序属性："  prop="sort">
              <el-input v-model="ruleForm.sort" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left:150px">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
       
    </el-card>
  </div>
</template>

<script>
export default {
     data() {
        return {
            num:0,
             input: '',
            options: [
                {
                    value: '1',
                    label: '服装-T恤',
                },
                {
                    value: '2',
                    label: '手机通讯',
                }
            ],
            ruleForm: {
            name: '',
            class: '',
            radio:'1',
            radio1:'1',
            radio2:'1',
            radio3:'1',
            radio4:'1',
            radio5:'1',
            textarea1: '',
            sort:'',
            },
            ruleForm1:{
              categories:'',
            },
            rules: {
            name: [
                { required: true, message: '请输入商品名称', trigger: 'blur' },
            ],
           
           
            }
        }
     },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleChange(value) {
        // console.log(value);
      },
     
    }

};
</script>

<style>
.Form {
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 100px;
}

</style>
