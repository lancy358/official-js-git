<template>
    <div>
        <div style="width:800px;margin-left:150px">
             <el-card class="box-card">
                 <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm Form"
                 >
                    <el-form-item label="品牌名称" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入品牌名称"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌首字母" prop="initial">
                        <el-input v-model="ruleForm.initial" placeholder="请输入品牌首字母"></el-input>
                    </el-form-item>
                     <el-form-item label="品牌LOGO" prop="logo">
                        <el-upload
                        v-model="ruleForm.logo"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        >
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10M</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="品牌专区大图" >
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        >
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10M</div>
                        </el-upload>
                    </el-form-item>
                     <el-form-item label="排序" prop="sort">
                        <el-input v-model="ruleForm.sort" placeholder="0"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌故事" prop="story">
                        <el-input
                        v-model="ruleForm.story"
                        type="textarea"
                        autosize
                        placeholder="请输入内容"
                    >
                        </el-input>
                    </el-form-item  >
                    <el-form-item label="是否显示" >
                        <el-radio v-model="radio" label="1">是</el-radio>
                        <el-radio v-model="radio" label="2">否</el-radio>
                    </el-form-item>
                    <el-form-item label="品牌制造商" >
                        <el-radio v-model="radio1" label="1">是</el-radio>
                        <el-radio v-model="radio1" label="2">否</el-radio>
                    </el-form-item>
                     <el-form-item>
                        <el-button style="margin-left:140px" type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button  @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                 </el-form>
             </el-card>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return  {
                options:{

                },
                 radio:'1',
                 radio1:'2',
                 ruleForm: {
                    name: '',
                    initial: '',
                    logo: '',
                    sort: '',
                    story: '',
                    },
                 rules: {
                    name: [
                        { required: true, message: '请输入商品名称', trigger: 'blur' },
                    ],
                    logo: [
                        {  required: true, message: '请上传品牌LOGO', trigger: 'change' }
                    ]
                   
                
                }    
            }
        },
        methods: {
            handleChange(){

            },
             handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                   
                } else {
                    // console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

        },
    }
</script>

<style >
    .Form {
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 100px;
}
</style>