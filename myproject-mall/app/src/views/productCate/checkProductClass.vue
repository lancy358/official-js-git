<template>
  <div>
    <div class="list">
      <el-card class="box-card">
        <div class="clearfix">
          <span class="el-icon-tickets" style="font-size:20px">数据列表</span>
          <el-button style="float: right; " @click="add">添加</el-button>
        </div>
      </el-card>
    </div>
    <div class="content">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="编号" width="80"></el-table-column>
        <el-table-column
          prop="name"
          label="分类名称"
          width="200"
        ></el-table-column>
        <el-table-column prop="rank" label="级别" width="80">
         
        </el-table-column>
        <el-table-column
          prop="number"
          label="商品数量"
          width="80"
        ></el-table-column>
        <el-table-column
          prop="unit"
          label="数量单位"
          width="80"
        ></el-table-column>
        <el-table-column prop="navigation" label="导航栏" width="120">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.navigation"
              active-value="1"
              inactive-value="0"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="ismarked" label="是否标记" width="120">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.ismarked"
              active-value="2"
              inactive-value="0"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="sort" label="排序" width="80">
          <p>1</p>
        </el-table-column>
        <el-table-column prop="name" label="设置" width="200">
          <template slot-scope="scope">
            <el-row class="handle" props="handle">
              <el-button size="mini" disabled="disabled">查看下级</el-button>
              <el-button size="mini" @click="check(scope.row.id)"
                >转移商品</el-button
              >
            </el-row>
          </template>
        </el-table-column>
          <el-table-column prop="handle" label="操作">
            <template slot-scope="scope">
          <el-row class="handle">
            <el-button size="mini" @click="edit(scope.row.id)">编辑</el-button>
            <el-button size="mini" style="background:#f56c6c; color:white" @click="deleteClass(scope.row.id)"
              >删除</el-button
            >
          </el-row>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="Block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <el-dialog title="商品分类" :visible.sync="dialogFormVisible">
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
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="数量单位" prop="numunit">
            <el-input v-model="ruleForm.numunit" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item label="排序" prop="sort">
            <el-input v-model="ruleForm.sort" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item label="是否显示" prop="radio">
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
            <el-cascader v-model="item.value" :options="options1" @change="handleChange"></el-cascader>
            <el-button style="margin-left:30px" type="primary" @click="remove(item)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="add3">新增</el-button>
          </el-form-item>

          <el-form-item label="关键词" prop="keyword">
            <el-input v-model="ruleForm.keyword"></el-input>
          </el-form-item>
          <el-form-item label="分类描述" prop="story">
            <el-input v-model="ruleForm.story" type="textarea" autosize></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="margin-left:140px" type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import { getClassList ,deleteCate,searchCate} from "../../api/api";
export default {
  data() {
    return {
      total: 10,
      currentPage: 1,
      pageSize: 5,
      pid: "",
      value1: "",
      navigation: 1,
      ismarked: 2,
      dialogFormVisible: false,
      tableData: [
      ],
      //  options: [
      //   // {
      //   //   value: "1",
      //   //   label: "无上级分类"
      //   // },
      //   // {
      //   //   value: "2",//id
      //   //   label: "服装"//name
      //   // },
      //   // {
      //   //   value: "3",
      //   //   label: "手机数码"
      //   // }
      // ],
      options1: [
        {
          value: "1",
          label: "服装-T恤",
          children: [
            {
              value: "1.1",
              label: "商家编号"
            },
            {
              value: "1.2",
              label: "通用季节"
            },
            {
              value: "1.3",
              label: "适合人群"
            },
            {
              value: "1.4",
              label: "上市时间"
            }
          ]
        },
        {
          value: "2",
          label: "手机数码-手机通讯",
          children: [
            {
              value: "2.1",
              label: "屏幕尺寸"
            },
            {
              value: "2.2",
              label: "网络"
            },
            {
              value: "2.3",
              label: "系统"
            },
            {
              value: "2.4",
              label: "电池容量"
            }
          ]
        }
      ],
      ruleForm: {
        name: "",
        CategoryP: "",
        numunit: "",
        sort: "",
        radio: "2",
        radio1: "2",
        icon: "",
        filtrate: [
          {
            value: ""
          }
        ],
        keyword: "",
        story: ""
      },
      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }]
      }
    };
  },
  created() {
    this.getClassFormlist();
  },
  computed: {
   ...mapState(['options'])
  },
  methods: {
    ...mapActions(['getOptions']),
    async getClassFormlist() {
      this.pid = this.$route.params.id.substring(4);
      const data = await getClassList({
        pagenum: this.currentPage,
        count: this.pageSize,
        pid: this.pid * 1
      });
      if (data.code === 0) {
        this.total=data.data.length
        this.tableData = data.data;
        data.data.forEach(item=>{
          // console.log(item)
            if (item.pid == 0) {
          // console.log(111)
          item.rank = "一级";
        } else {
          item.rank = "二级";
        }
        })
      
      } else {
        this.$message.error("获取失败");
      }
    },
    check(id) {},
    
    async deleteClass(id){
      
        let d=await deleteCate(id)

        if(d.code===0){
          console.log(111)
          this.getClassFormlist()
          this.$message.success('删除成功')
        }
    },
    handleCurrentChange(val) {
       this.currentPage=val
      this.getClassFormlist();
    },
    handleSizeChange(val) {
        this.pageSize=val
      this.getClassFormlist();
    },
   
    add() {
       this.$router.push("/addproductcate");
    },
   
    async edit(id){
      this.dialogFormVisible = true;

      
      let d= await searchCate(id)
      if(d.code===0){
        console.log(d.searchData)

        this.ruleForm=d.searchData
          this.getOptions()
      }
    },
    handleChange() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    remove(item) {
      var index = this.ruleForm.filtrate.indexOf(item);
      if (index === 0) {
        this.$message({
          message: "至少要留一个",
          type: "warning"
        });
      } else {
        this.ruleForm.filtrate.splice(index, 1);
      }
    },
    add3() {
      this.ruleForm.filtrate.push({
        value: "",
        key: Date.now()
      });
    }
  }
};
</script>

<style>
.list,
.content,
.Block {
  margin-top: 20px;
}
.Block {
  float: right;
}
.el-pagination .el-input__inner {
  width: 100%;
}
.has-gutter .cell,
.el-table__row .cell {
  text-align: center;
}
</style>
