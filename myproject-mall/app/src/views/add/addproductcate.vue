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
                    <el-form-item label="分类名称" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入品牌名称"></el-input>
                    </el-form-item>
                     <el-form-item label="上级分类" prop="CategoryP">
                         <el-select v-model="ruleForm.CategoryP" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                     <el-form-item label="数量单位" prop="numunit">
                        <el-input v-model="ruleForm.numunit" placeholder="0"></el-input>
                    </el-form-item>
                     <el-form-item label="排序" prop="sort">
                        <el-input v-model="ruleForm.sort" placeholder="0"></el-input>
                    </el-form-item>
                     <el-form-item label="是否显示"  prop="radio">
                        <el-radio v-model="ruleForm.radio" label="1">是</el-radio>
                        <el-radio v-model="ruleForm.radio" label="2">否</el-radio>
                    </el-form-item>
                    <el-form-item label="品牌制造商" prop="radio1">
                        <el-radio v-model="ruleForm.radio1" label="1">是</el-radio>
                        <el-radio v-model="ruleForm.radio1" label="2">否</el-radio>
                    </el-form-item>
                    <el-form-item label="分类图标" prop="icon">
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
                     <el-form-item
                            label="筛选属性"
                            v-for="(item) in ruleForm.filtrate"
                            :key="item.key"
                            prop="filtrate"
                        >
                        <el-cascader
                            v-model="item.value"
                            :options="options1"
                            @change="handleChange">
                        </el-cascader>
                        <el-button style="margin-left:30px" type="primary" @click="remove(item)">删除</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="add">新增</el-button>
                    </el-form-item>
                    
                    <el-form-item label="关键词" prop="keyword">
                        <el-input v-model="ruleForm.keyword" ></el-input>
                    </el-form-item>
                    <el-form-item label="分类描述" prop="story">
                        <el-input
                        v-model="ruleForm.story"
                        type="textarea"
                        autosize
                        >
                        </el-input>
                    </el-form-item  >
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
                dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          
        },
      
                options:[
                    {
                    value: '1',
                    label: '无上级分类'
                    },
                    {
                    value: '2',
                    label: '服装'
                    },
                    {
                    value: '3',
                    label: '手机数码'
                    },

                ],
                options1: [
                    {
                        value: '1',
                        label: '服装-T恤',
                        children: [
                            {
                                value: '1.1',
                                label: '商家编号',
                            },
                            {
                                value: '1.2',
                                label: '通用季节',
                            },
                            {
                                value: '1.3',
                                label: '适合人群',
                            },
                            {
                                value: '1.4',
                                label: '上市时间',
                            },

                        ]
                    },
                    {
                        value: '2',
                        label: '手机数码-手机通讯',
                        children: [
                            {
                                value: '2.1',
                                label: '屏幕尺寸',
                            },
                            {
                                value: '2.2',
                                label: '网络',
                            },
                            {
                                value: '2.3',
                                label: '系统',
                            },
                            {
                                value: '2.4',
                                label: '电池容量',
                            },

                        ]
                    }
                ],
                
                 ruleForm: {
                    name: '',
                    CategoryP:'',
                    numunit:'',
                    sort: '',
                    radio:'2',
                    radio1:'2',
                    icon:'',
                    filtrate:[{
                        value:''
                    }],
                    keyword:'',
                    story: '',
                    },
                 rules: {
                    name: [
                        { required: true, message: '请输入商品名称', trigger: 'blur' },
                    ],
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
                    alert('submit!');
                   
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            remove(item) {
                var index = this.ruleForm.filtrate.indexOf(item)
                if (index === 0) {
                    this.$message({
                        message: '至少要留一个',
                        type: 'warning'
                        });
                }else{
                    this.ruleForm.filtrate.splice(index, 1)
                }
                
            },
            add() {
                this.ruleForm.filtrate.push({
                value: '',
                key: Date.now()
                });
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