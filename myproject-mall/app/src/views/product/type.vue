<template>
    <div class="productType">
        <div class="list">
            <el-card class="box-card">
            <div  class="clearfix">
                <span class="el-icon-tickets" style="font-size:20px">数据列表</span>
                <el-button   style="float: right; " @click="edit" >添加</el-button>
            </div>
            </el-card>
        </div>
        <div class="content">
            <el-table
                :data="tableData"
                border
                style="width: 100%"
            >
                <el-table-column
                    prop="id"
                    label="编号"
                    width="80">
                </el-table-column>
                 <el-table-column
                    prop="name"
                    label="类型名称"
                    width="450"
                    >
                   
                  </el-table-column>
                <el-table-column
                    prop="number"
                    label="属性数量"
                    width="150">
                    
                </el-table-column>
                 <el-table-column
                    prop="handle"
                    label="设置"
                    width="300">
                    <el-row class="handle">
                     <el-button  size="mini" @click="getattrlist">属性列表</el-button>
                    
                   </el-row>
                </el-table-column>
                  <el-table-column
                    prop="handle"
                    label="操作"
                     
                   >
                   <el-row class="handle" style="display:flex;justify-content: space-around;">
                     <el-button  size="mini" @click="edit">编辑</el-button>
                     <el-button  size="mini" style="background:#f56c6c; color:white">删除</el-button>
                   </el-row>

                  </el-table-column>
            </el-table>
            <el-form 
              :model="form"
              :rules="rules"
              ref="form"
              >
                <el-dialog  title="编辑类型" :visible.sync="dialogFormVisible">
                
                    <el-form-item label="类型名称" class="dialog" prop="name" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" ></el-input>
                    
                </el-form-item>
                <div slot="footer" class="dialog-footer">
                    <el-form-item >
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="confirm('form')">确 定</el-button>
                    </el-form-item>
                </div>
                </el-dialog>
              </el-form>
            
        </div>
        
        <div class="Block">
            <el-pagination 
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[6, 8, 10, 12]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="10">
            </el-pagination>
        </div>
        
    </div>
</template>

<script>
    export default {
       data() {
      return {
          currentPage4:4,
           dialogFormVisible: false,
         form: {
            name: '',
        },
        rules:{
            name: [
                        { required: true, message: '请输入类型名称', trigger: 'blur' },
                    ],
        },
        formLabelWidth: '120px',
        tableData: [{
          id:'01',
          name: '服装T恤',
          number: '2',
          Number:'200'
        }]
      }
    },
    methods: {
      edit(){
        this.dialogFormVisible=true
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      },
      confirm(formName){
          this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                   
                } else {
                    // console.log('error submit!!');
                    return false;
                }
                });
           this.dialogFormVisible=false
      },
      getattrlist(){
          this.$router.push('/productAttr/cid=1')
      },
      getparameterlist(){

      }
    },
    }
</script>

<style>
.productType .el-dialog {
    width:30%;
}
.dialog .el-input{
    width:200px;
    
}
.list,.content,.Block{
    margin-top: 20px
}
.Block {
    float: right
}
.el-pagination  .el-input__inner{
   width:100%
 }
.has-gutter .cell,.el-table__row .cell{
    text-align: center
 }

</style>