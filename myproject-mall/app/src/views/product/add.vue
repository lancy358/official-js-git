<template>
  <div style="width:800px;margin-left:150px">
    <el-card class="box-card">
      <div style="margin-top:20px ">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm Form"
        >
          <el-form-item label="商品分类" prop="class">
            <el-cascader
              :options="pOptions"
              v-model="ruleForm.class"
              @change="handleChange"
              clearable
            ></el-cascader>
          </el-form-item>
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="副标题" prop="subhead">
            <el-input v-model="ruleForm.subhead" placeholder="请输入商品副标题"></el-input>
          </el-form-item>
          <el-form-item label="商品品牌" prop="brand">
            <el-select v-model="ruleForm.brand" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品图片" prop="imgPath">
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
            <el-input v-model="ruleForm.introduce" type="textarea" autosize placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="商品货号" prop="artnum">
            <el-input v-model="ruleForm.artnum" placeholder></el-input>
          </el-form-item>
          <el-form-item label="商品售价" prop="price">
            <el-input v-model="ruleForm.price" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item label="市场价" prop="marketprice">
            <el-input v-model="ruleForm.marketprice" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item label="商品库存" prop="inventory">
            <el-input v-model="ruleForm.inventory" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item label="计量单位" prop="unit">
            <el-input v-model="ruleForm.unit" placeholder></el-input>
          </el-form-item>
          <el-form-item label="商品重量" prop="Weight">
            <el-input v-model="ruleForm.Weight" placeholder="0" style="width:300px"></el-input>
            <span style="margin-left:10px">克</span>
          </el-form-item>
          <el-form-item label="排序" prop="sort">
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
const axios = require("axios");
import { mapActions, mapState } from "vuex";
import { addProduct, doUpload ,getAllClassList} from "../../api/api";
export default {
  computed: {
    ...mapActions(['getPOptions']),
     ...mapState(['pOptions']),
  },
    created() {
    this.getPOptions 
  },
  data() {
    return {
      fileList: [], 
      input: "",
      // options: [
      //   {
      //     value: "服装",//pid=0
      //     label: "服装",//name
      //     children: [
      //       {
      //         value: "外套",//pid=1
      //         label: "外套"//name
      //       },
      //       {
      //         value: "T恤",
      //         label: "T恤"
      //       },
      //       {
      //         value: "衬衫",
      //         label: "衬衫"
      //       },
      //       {
      //         value: "休闲裤",
      //         label: "休闲裤"
      //       },
      //       {
      //         value: "牛仔裤",
      //         label: "牛仔裤"
      //       },
      //       {
      //         value: "男鞋",
      //         label: "男鞋"
      //       }
      //     ]
      //   },
      //   {
      //     value: "手机数码",
      //     label: "手机数码",
      //     children: [
      //       {
      //         value: "手机通讯",
      //         pid:1,
      //         label: "手机通讯"
      //       },
      //       {
      //         value: "手机配件",
      //         pid:1,
      //         label: "手机配件"
      //       },
      //       {
      //         value: "摄影影像",
      //         pid:1,
      //         label: "摄影影像"
      //       },
      //       {
      //         value: "影音娱乐",
      //         pid:1,
      //         label: "影音娱乐"
      //       },
      //       {
      //         value: "数码配件",
      //         pid:1,
      //         label: "数码配件"
      //       },
      //       {
      //         value: "智能设备",
      //         pid:1,
      //         label: "智能设备"
      //       }
      //     ]
      //   }
      // ],
      options1: [
        {
          value: "小米",
          label: "小米"
        },
        {
          value: "七匹狼",
          label: "七匹狼"
        },
        {
          value: "海澜之家",
          label: "海澜之家"
        },
        {
          value: "苹果",
          label: "苹果"
        },
        {
          value: "三星",
          label: "三星"
        },
        {
          value: "华为",
          label: "华为"
        }
      ],
      imgPath: "",
      ruleForm: {
        name: "",
        class: [],
        subhead: "",
        brand: "",
       
        introduce: "",
        artnum: "",
        price: "",
        marketprice: "",
        sales: "",
        unaudit: "",
        audit: "",
        inventory: "",
        unit: "",
        Weight: "",
        sort: ""
      },

      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        class: [{ required: true, message: "请选择", trigger: "change" }],
        subhead: [
          { required: true, message: "输入商品副标题", trigger: "blur" }
        ],
        brand: [{ required: true, message: "请选择品牌", trigger: "change" }]
      }
    };
  },

  methods: {
  
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        // console.log(this.ruleForm);
        if (valid) {
          const {
            id,
            class: [first, second],
            name,
            subhead,
            brand,
            artnum,
            price,
            marketprice,
            inventory,
            unit,
            Weight,
            sort
          } = this.ruleForm;
          const obj = {
            first,
            second,
            name,
            subhead,
            brand,
            imgPath: 'http://localhost:8181'+this.imgPath,
            price,
            sales: "0",
            unaudit: "未审核",
            audit: "审核详情",
            marketprice,
            switch2: 2,
            inventory,
            unit,
            Weight,
            sort
          };
          // console.log(obj);
          let d=await addProduct(obj)
          if(d.code===0){
            this.$router.push('/product/list')
            

          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(value) {
      console.log(value);
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
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
                
        this.imgPath=result.data.imgPath
         
        });
    }
  },
};
</script>

<style>
.Form {
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 100px;
}
</style>
