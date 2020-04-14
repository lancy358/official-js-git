<template>
    <div>
         <el-card class="box-card">
              <span class="iconfont icon-sousuo" style="font-size:20px">筛选搜索</span>
               <el-button type="primary" style="float: right; " >查询结果</el-button>
               <div style="display:flex;margin-top:20px;margin-left:30px"> 
                   <div style="font-size: 14px;width:80px;text-align:center;height:40px;line-height:40px" >输入搜索：</div>
                   <el-input
                   style="width:203px"
                    placeholder="品牌名字/关键字"
                    v-model="input"
                    clearable>
                    </el-input>
                </div>
         </el-card>
          <div class="list">
            <el-card class="box-card">
            <div  class="clearfix">
                <span class="el-icon-tickets" style="font-size:20px">数据列表</span>
                <el-button   style="float: right; " @click="add" >添加</el-button>
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
                    type="selection"
                    width="60">
                  </el-table-column>
                <el-table-column
                   prop="id"
                    label="编号"
                    width="100">
                    
                </el-table-column>
                 <el-table-column
                 prop="name"
                    label="品牌名称"
                    width="320"
                    >
                  </el-table-column>
                 
                <el-table-column
                   prop="initial"
                    label="品牌首字母"
                    width="100">
                    
                </el-table-column>
                 <el-table-column
                   prop="sort"
                    label="排序"
                    width="100">
                    
                </el-table-column>
                <el-table-column
                  prop="manufacturer"
                  label="品牌制造商"
                  width="100">
                    <template slot-scope="scope">
                        <el-switch
                          v-model="scope.row.manufacturer" 
                          active-value="1"
                          inactive-value="0"
                          >
                        </el-switch>
                    </template>    
                </el-table-column>
                <el-table-column
                  prop="isShow"
                  label="是否显示"
                  width="100">
                    <template slot-scope="scope">
                        <el-switch
                          v-model="scope.row.isShow" 
                          active-value="2"
                          inactive-value="0"
                          >
                        </el-switch>
                    </template>    
                </el-table-column>
                <el-table-column
                  prop="correlation"
                  label="相关"
                  width="220">
                 <template slot-scope="scope">
                   <div>
                     <span>商品：{{scope.row.correlation.product}}</span><span>评价：{{scope.row.correlation.evaluate}}</span>
                   </div>
                 </template>
                </el-table-column>
                  <el-table-column
                  
                    label="操作"
                   >
                   <el-row class="handle">
                     <el-button  size="mini" @click="edit">编辑</el-button> 
                     <el-button  size="mini" style="background:#f56c6c; color:white">删除</el-button>
                   </el-row>
                  </el-table-column>
            </el-table>
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
                    <el-button type="primary" size="small" >确定</el-button>
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
        </div>
    </div>
</template>

<script>
    export default {
         data() {
          return {
            value1:'',
            value:'',
            input: '',
            currentPage4:4,
            manufacturer:1,
            isShow:2,
            tableData: [{
              id:'01',
              name: '小米',
              initial: 'M',
              sort:'100',
              correlation:{
                product:'100',
                evaluate:'1000'
              }
            }],
            options:[
              {
                  value: '1',
                  label: '隐藏品牌'
                },
                {
                  value: '2',
                  label: '显示品牌'
                }
            ]
          }
        },
        methods: {
          handleSizeChange(){

          },
          handleCurrentChange(){

          },
          add(){
            this.$router.push('/addbrand')
          },
          edit(){
            this.$router.push('/updatabrand/1')
          }
        },
    }
</script>

<style >
.list,.content,.Block,.Batch{
    margin-top: 20px
}
.Block {
    float: right
}
 .foot{
    display:flex;
    justify-content: space-between
  }
.Batch .el-input__inner{
   
    height: 32px;
    line-height: 32px;
  }
.Batch .el-button{
  margin-left: 30px
}
.el-pagination  .el-input__inner{
   width:100%
 }
 .has-gutter .cell,.el-table__row .cell{
     text-align: center
 }
 
</style>