<template>
  <div>
      <div class="search">
          <el-card class="box-card">
              <div>
                  <span class="iconfont icon-sousuo" style="font-size:20px">筛选搜索</span>
                  <el-button @click="searchFn" type="primary" size="small" style="float: right; " >查询按钮</el-button>
                  <el-button  size="small" style="float: right; " @click="resetForm('ruleForm')">重置</el-button>
              </div>  
                <el-form 
                :inline="true" 
                :model="ruleForm" 
                class="demo-form-inline"
                ref="ruleForm"
                >
                  <el-form-item label="输入搜索：" prop="name">
                     <el-input
                      v-model="ruleForm.name"
                      placeholder="商品名称"
                      clearable>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="商品货号：" prop="artnum">
                    <el-input 
                     v-model="ruleForm.artnum"
                     placeholder="商品货号"
                      clearable
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="商品分类：" prop="class">
                     <el-cascader
                      v-model="ruleForm.class"
                      :options="pOptions"
                     >
                      </el-cascader>
                  </el-form-item>
                  <el-form-item label="商品品牌：" prop="brand">
                   <el-select 
                   v-model="ruleForm.brand" 
                   clearable 
                   placeholder="请选择品牌">
                    <el-option
                      v-for="item in options3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </el-form-item>
                  <el-form-item label="上架状态：" prop="switch1">
                   <el-select 
                   v-model="ruleForm.switch1" 
                   clearable
                   
                   placeholder="全部">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </el-form-item>
                  <el-form-item label="审核状态："  prop="audit">
                    <el-select 
                    v-model="ruleForm.audit" 
                    clearable 
                    placeholder="全部">
                    <el-option
                      v-for="item in options4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </el-form-item>
              </el-form>
          </el-card>
      </div>
      <div class="list">
        <el-card class="box-card">
          <div  class="clearfix">
            <span class="el-icon-tickets" style="font-size:20px">数据列表</span>
            <el-button   style="float: right; " @click="add">添加</el-button>
          </div>
        </el-card>
      </div>
      <div class="listContent">
                <el-table
                  :data="tableData"
                   @selection-change="handleSelectionChange"
                    :row-class-name="tableRowClassName"
                border
                style="width: 100%"
                  >
                  <el-table-column
                    type="selection"
                    width="60">
                  </el-table-column>
                  <el-table-column
                    prop="id"
                    label="编号"
                    width="80">
                    
                  </el-table-column>
                  <el-table-column
                    prop="imgPath"
                    label="商品图片"
                    width="150">
                    <template slot-scope="scope">
                      <img style=" height:80px;width:80px " :src="scope.row.imgPath" alt="">
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="商品名称"
                    
                    >
                     <template  slot-scope="scope">
                        <p style="text-align:center">
                           {{scope.row.name}}
                        </p>
                        <p style="text-align:center">
                           品牌：{{scope.row.brand}}
                        </p>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    label="价格/货号"
                    width="130"
                   >
                   <template  slot-scope="scope">
                   <p>价格：￥ {{scope.row.price}}</p>
                   <p>货号：{{scope.row.artnum}}</p>
                   </template>
                  </el-table-column>
                  <el-table-column
                   prop="switch"
                    label="标签"
                     width="120"
                   
                   >
                      <template slot-scope="scope">
                        <p>上架：
                        <el-switch
                          v-model="scope.row.switch1" 
                          :active-value="1"
                          :inactive-value="0"
                          @change="changeSwitch1(scope.row.id,scope.row.switch1)"
                          >
                        </el-switch>
                        </p>
                        <p>新品：
                        <el-switch
                          v-model="scope.row.switch2" 
                          :active-value="2"
                          :inactive-value="0"
                           @change="changeSwitch2(scope.row.id,scope.row.switch2)"
                          >
                        </el-switch>
                        </p>
                        <p>推荐：
                        <el-switch
                          v-model="scope.row.switch3" 
                          :active-value="3"
                          :inactive-value="0"
                          @change="changeSwitch3(scope.row.id,scope.row.switch3)"
                          >
                        </el-switch>
                        </p>
                      </template>
                  
                  </el-table-column>
                  <el-table-column
                   prop="sort"
                    label="排序"
                     width="80"
                   >
                   
                  </el-table-column>
                  <el-table-column
                    label="库存"
                     width="80"
                   >
                    <template slot-scope="scope">
                      <div>
                        <el-button type="primary" icon="el-icon-edit" circle @click="Dialog(scope.row.artnum)"></el-button>
                      </div>
                    </template>
                     
                   
                  </el-table-column>
                  <el-table-column
                    prop="sales"
                    label="销量"
                     width="80"
                   >
                   
                  </el-table-column>
                  <el-table-column
                  
                    label="审核状态"
                     width="80"
                   >
                    <template  slot-scope="scope">
                      <p>{{scope.row.unaudit}}</p>
                      <p style="color:#66b1ff;margin-top:5px">{{scope.row.audit}}</p>
                   </template>
                   
                  </el-table-column>
                  <el-table-column
                    label="操作"
                   >
                    <template slot-scope="scope">
                          <el-button  
                          size="mini"
                          @click="edit(scope.row.id)">编辑</el-button>
                          <el-button  
                          size="mini" 
                           @click="delet(scope.row.id)"
                          style="background:#f56c6c; color:white">删除</el-button >
                    </template>
                   </el-table-column>
                </el-table>
            </div> 
        <div class="foot">    
          <div class="Batch">
            <el-select v-model="value" placeholder="批量选择" >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button type="primary" size="small" @click="volumeSet">确定</el-button>
          </div>
          <div class="Block">
            <el-pagination 
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
          </div>
        </div>
    <el-dialog title="编辑商品信息" :visible.sync="dialogTableVisible">
      <div style="display:flex" class="dialog">
        <span style="width:80px;text-align:center;height:40px;line-height:40px">商品货号：{{}}</span> 
        <span>
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
             <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </span>
      </div>
      <el-table :data="gridData">
        <el-table-column property="date" label="sku编号" width="300"></el-table-column>
        <el-table-column property="price" label="销售价格" width="200"></el-table-column>
        <el-table-column property="repertory" label="商品库存"></el-table-column>
        <el-table-column property="waring" label="商品预警值"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </span> 
    </el-dialog>
    <el-dialog title="修改商品信息" :visible.sync="dialogFormVisible1">
    <el-card class="box-card" >
      <div style="margin-top:20px " >
        <el-form
          :model="ruleForm1"
          :rules="rules"
          ref="ruleForm1"
          label-width="100px"
          class="demo-ruleForm Form"
        >
          <el-form-item label="商品分类" prop="class">
            <el-cascader :options="pOptions" v-model="ruleForm1.class" @change="handleChange" clearable>
            </el-cascader>
          </el-form-item>
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm1.name" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="副标题"  prop="subhead">
              <el-input v-model="ruleForm1.subhead" placeholder="请输入商品副标题"></el-input>
          </el-form-item>
          <el-form-item label="商品品牌" prop="brand">
            <el-select v-model="ruleForm1.brand" placeholder="请选择">
              <el-option
              v-for="item in options6"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="商品图片" prop="imgPath1">
            <el-upload
              name= 'file'
              ref="upload"
              class="upload-demo"
              action="http://localhost:8181/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-change="handChange"
              :auto-upload="false"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button size="small" type="primary">上传文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="商品介绍" prop="introduce">
              <el-input
              v-model="ruleForm1.introduce"
              type="textarea"
              autosize
              placeholder="请输入内容"
            >
              </el-input>
          </el-form-item>
          <el-form-item label="商品货号"  prop="artnum">
              <el-input v-model="ruleForm1.artnum" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="商品售价"  prop="price">
              <el-input v-model="ruleForm1.price" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item label="市场价"  prop="marketprice">
              <el-input v-model="ruleForm1.marketprice" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item label="商品库存"  prop="inventory">
              <el-input v-model="ruleForm1.inventory" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item label="计量单位"  prop="unit">
              <el-input v-model="ruleForm1.unit" placeholder="" ></el-input>  
          </el-form-item>
           <el-form-item label="商品重量"  prop="Weight">
              <el-input v-model="ruleForm1.Weight" placeholder="0" style="width:300px"></el-input><span style="margin-left:10px">克</span>
          </el-form-item>
          <el-form-item label="排序"  prop="sort">
              <el-input v-model="ruleForm1.sort" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm1('ruleForm1')" style="margin-left:150px">提交</el-button>
              <el-button @click="resetForm('ruleForm1')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    </el-dialog>
  </div>
                
</template>
    
<script>
// import {mapActions} from 'vuex';
const axios = require("axios");
import { mapActions, mapState } from "vuex";

import {productList,productAPI,changeProduct,deleProduct,searchProduct,resetATTR,changeSwitch} from '../../api/api'
  export default {
     created() {
          this.getList()
           this.getPOptions 
      },
      computed: {
        ...mapActions(['getPOptions']),
     ...mapState(['pOptions']),
      },
     data() {
      return {
        fileList:[],
        imgPath1:'',
        currentPage: 1,
        pageSize:5,
        total:10,
         value1: 1,
          value:'' ,
          input3: '',
           options:
           [
             {
              value: '1',
              label: '商品上架'
            },
            {
              value: '1-0',
              label: '商品下架'
            },
            {
              value: '3',
              label: '设为推荐'
            },
            {
              value: '3-0',
              label: '取消推荐'
            },
            {
              value: '2',
              label: '设为新品'
            },
            {
              value: '2-0',
              label: '取消新品'
            },
          ],
            // options1: [
            //   {
            //     value: '服装',
            //     label: '服装',
            //     children: [
            //       {
            //       value: '外套',
            //       label: '外套'
            //       },
            //       {
            //         value:'T恤',
            //         label:'T恤'
            //       },
            //       {
            //       value: '衬衫',
            //       label: '衬衫'
            //       },
            //       {
            //       value: '休闲裤',
            //       label: '休闲裤',
            //       },
            //       {
            //       value: '牛仔裤',
            //       label: '牛仔裤'
            //       },
            //       {
            //       value: '男鞋',
            //       label: '男鞋'
            //       }] 
            //     },
            //   {
            //     value: '手机数码',
            //     label: '手机数码',
            //     children: [
            //       {
            //       value: '手机通讯',
            //       label: '手机通讯'
            //       },
            //       {
            //         value:'手机配件',
            //         label:'手机配件'
            //       },
            //       {
            //       value: '摄影影像',
            //       label: '摄影影像'
            //       },
            //       {
            //       value: '影音娱乐',
            //       label: '影音娱乐',
            //       },
            //       {
            //       value: '数码配件',
            //       label: '数码配件'
            //       },
            //       {
            //       value: '智能设备',
            //       label: '智能设备'
            //       }
            //     ]
            //   }
            // ],
            options2: [
              {
                value: '1',
                label: '上架'
              },
              {
              value: '0',
              label: '下架'
              }
          ],
          options3: [
            {
              value: '小米',
              label: '小米'
            },
            {
              value: '七匹狼',
              label: '七匹狼'
            },
            {
              value: '海澜之家',
              label: '海澜之家'
            },
            {
              value: '苹果',
              label: '苹果'
            },
            {
              value: '三星',
              label: '三星'
            },
            {
              value: '华为',
              label: '华为'
            },
          ],
          options4: [
            {
              value: '审核',
              label: '审核'
            },
            {
              value: '未审核',
              label: '未审核'
            }
          ],
          options5:[
              {
                value: '服装',
                label: '服装',
                children: [
                  {
                  value: '外套',
                  label: '外套'
                  },
                  {
                    value:'T恤',
                    label:'T恤'
                  },
                  {
                  value: '衬衫',
                  label: '衬衫'
                  },
                  {
                  value: '休闲裤',
                  label: '休闲裤',
                  },
                  {
                  value: '牛仔裤',
                  label: '牛仔裤'
                  },
                  {
                  value: '男鞋',
                  label: '男鞋'
                  }] 
                },
              {
                value: '手机数码',
                label: '手机数码',
                children: [
                  {
                  value: '手机通讯',
                  label: '手机通讯'
                  },
                  {
                    value:'手机配件',
                    label:'手机配件'
                  },
                  {
                  value: '摄影影像',
                  label: '摄影影像'
                  },
                  {
                  value: '影音娱乐',
                  label: '影音娱乐',
                  },
                  {
                  value: '数码配件',
                  label: '数码配件'
                  },
                  {
                  value: '智能设备',
                  label: '智能设备'
                  }
                ]
              }
            ],
          options6:[
            {
              value: '小米',
              label: '小米'
            },
            {
              value: '七匹狼',
              label: '七匹狼'
            },
            {
              value: '海澜之家',
              label: '海澜之家'
            },
            {
              value: '苹果',
              label: '苹果'
            },
            {
              value: '三星',
              label: '三星'
            },
            {
              value: '华为',
              label: '华为'
            },
          ],
          id:'',
         ruleForm: {
          name: '',
          class:[{first:'',second:''}],
          artnum:'',
          brand:'',
          switch1:'',
          audit:''
        },
        ruleForm1: {
            name: '',
            class: '',
            subhead: '',
            brand: '',
            introduce: '',
            artnum:'',
            price:'',
            marketprice:'',
            inventory:'',
            unit:'',
            Weight:'',
            sort:'',
            },
        ary:[],
         search:[],
         tableData: [],
      dialogFormVisible:false,
      dialogFormVisible1:false,
      multipleSelection:[],
      dialogTableVisible: false,
      gridData: [ {
        num: '01',
        price: '3999',
        repertory: '100',
        waring:'10'
      }],
      rules: {
            name: [
                { required: true, message: '请输入商品名称', trigger: 'blur' },
            ],
            class: [
                {  required: true, message: '请选择', trigger: 'change' }
            ],
            subhead: [
                { required: true, message: '输入商品副标题', trigger: 'blur' }
            ],
            brand: [
                {  required: true, message: '请选择品牌', trigger: 'change' }
            ]
           
            }
      }
    },
    methods: {
      handChange(){
         let fd = new FormData(); //
      let file = document.querySelector(".el-upload__input").files[0];
      console.log(file);
      fd.append("file", file);
      console.log(fd);
      axios.post("http://localhost:8181/upload", 
        fd,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      ).then(result => {
                
        this.imgPath1=result.data.imgPath
         
        });
      },
      handleRemove(){

      },
      handlePreview(){

      },
      handleSelectionChange(val){
        this.multipleSelection = val;
      
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
          // ...mapActions(['getdata']),
      async getList(){
        const data=await productList({
          pagenum:this.currentPage,
          count:this.pageSize,
          
        })
        // console.log(data)
        if(data.code===0){
          // console.log(data)
          this.tableData=data.data
          this.total=data.total
          
        }else{
          this.$message.error('获取失败')
        }
      },
      async volumeSet(){
        let resetDate=this.multipleSelection
        console.log()
        
        let resetAttr={}
        // console.log(this.value)
        switch (this.value) {
          case '1-0':
           resetAttr={switch1:0}
           break;
          case '1': 
           resetAttr={switch1:1}
           break;
          case '2-0':
           resetAttr={switch2:0}
           break;
          case '2': 
           resetAttr={switch2:2}
           break;
          case '3-0':
          resetAttr={switch3:0}
          break;
          case '3': 
           resetAttr={switch3:3}
           break;
        }
      
        let obj={resetDate,resetAttr}
        // console.log(obj)
        if(resetDate&&resetAttr){
            let d=await resetATTR(obj)
              if(d.code===0){
            this.getList()
        }
        }
      },
      async changeSwitch1(num,val){
        // console.log(num,val)
        let obj={id:num,switch1:val}
        let d=await changeSwitch(obj)
        if(d.code===0){
          this.getList()
        }
        
      },
      async changeSwitch2(num,val){
        // console.log(num,val)
        let obj={id:num,switch2:val}
        let d=await changeSwitch(obj)
        if(d.code===0){
          this.getList()
        }
        
      },
      async changeSwitch3(num,val){
        // console.log(num,val)
        let obj={id:num,switch3:val}
        let d=await changeSwitch(obj)
        if(d.code===0){
          this.getList()
        }
        
      },
       handleSizeChange(val) {
         console.log(val)
        this.pageSize=val
        this.getList()
      },
      handleCurrentChange(val) {
         console.log(val)
        this.currentPage=val
         this.getList()
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.getList()
      },
      async searchFn(){
       
        const {name,class:[{first,second}],artnum,brand, switch1,audit}=this.ruleForm
        const obj={
             name,
           first,
           second,
            artnum,
            brand,
            switch1,
            audit
        }
      const d=await searchProduct(obj)
      if(d.code===0){
          // console.log(data)
          this.tableData=d.data
          this.total=d.total
        }else{
          this.$message.error('获取失败')
        }
      },
      Dialog(id){
        this.dialogTableVisible=true;

      },
      submitForm1(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
          console.log(this.ruleForm1)
          let {id,class:[first,second],name,subhead,brand,artnum,price,marketprice,inventory,unit,Weight,sort} =this.ruleForm1
          const obj={
            id,
            first,
            second,
            name,
            subhead,
            brand,
            imgPath:'http://localhost:8181'+this.imgPath1,
            artnum,
            price,
            marketprice,
            inventory,
            unit,
            Weight,
            sort
          }
          // console.log(obj)
          const d=await changeProduct(obj)
          console.log(d)
          if(d.code===0){
           this.dialogFormVisible1=false
            this.getList()
          }
         
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     
      async edit(id){
       this.dialogFormVisible1=true
        const d = await productAPI(id);
        if(d.code===0){
          let data=d.data
          // console.log(data)
          // console.log(this.ruleForm1)
          this.ruleForm1=data
        }
      },
      delet(id){
        this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async (e)=>{
                    const data = await deleProduct(id);
                    if(data.code === 0){
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getList();
                    }else{
                        this.$message({
                            type: 'error',
                            message: '删除失败!'
                        });
                    }
                  

                }).catch(()=>{
                    this.$message({
                        type: 'success',
                        message: '已取消删除!'
                    });
                })

      },
      add(){
        this.$router.push('/product/add')
      },
    
      handleChange(){

      }

    },
   
  }
 
</script>

<style  >


  *{
    margin:0;
    padding:0
  }
  .el-table_1_column_6 p,.el-table_1_column_5 p,.el-table_1_column_4 p,.el-table_1_column_10 p{
    margin-bottom: 10px
  }
  .dialog .el-input__inner{
    margin-left:60px;
    width:250px;
    float: right;
  }
  .has-gutter .cell,.el-table__row .cell{
     text-align: center
 }
  .search .el-input__inner{
    width: 203px;
    height: 32px;
    line-height: 32px;
  }
  .el-form-item__label{
    font-size: 14px;
    width:100px;
    text-align:center;
    height:40px;
    line-height:40px
  }
 .el-pagination  .el-input__inner{
   width:100%
 }
  .foot{
    display:flex;
    justify-content: space-between
  }
  .Batch,.Block{
    margin-top:20px
  }
  .Batch .el-input__inner{
   
    height: 32px;
    line-height: 32px;
  }
.Batch .el-button{
  margin-left: 30px
}
 .handle{
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap
 }
 .handle .el-button{
   margin-left: 40px;
   margin-top: 10px
 }
  .breadcrumb{
    display: flex;
    margin-top: 20px;
    font-size: 16px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
  }
  .breadcrumb .el-breadcrumb{
    margin-left:20px;
  }
  
  
  
 .icon-shousuo1,.icon-shousuo {
   color: rgb(85, 83, 83);
   font-size: 16px
 }
 .search{
   width: 100%;
   border: 1px solid rgb(240, 238, 238);
   border-radius: 5px;
   margin-top: -20px;
   display:flex;
   flex-direction: column
 }
 
 .el-button--primary {
   border-color: none;
 }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
.el-card__header{
  height: 50px;
}
  .box-card .el-button{
    margin-right: 10px;
    margin-top: -15px;
  }
  .search .el-form{
    margin-left:50px ;
    padding: 5px 80px;
    margin-top: -8px;
    margin-bottom: -18px;
  }
  .el-form-item {
    margin-bottom: 17px
  }
  .search .el-card{
    border: none
  }
  .list .el-card{
    border: 1px solid rgb(240, 238, 238);
    border-radius: 5px;
    margin-top: 10px;
    height: 60px;
  }
  .list .box-card .el-button{
    margin-top: -10px
  }
.listContent {
  border: 1px solid rgb(240, 238, 238);
  border-radius: 5px;
  margin-top: 10px;

}
</style>