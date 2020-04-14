<template>
    <div>
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
                    width="80">
                </el-table-column>
                 <el-table-column
                    prop="name"
                    label="属性名称"
                    width="150"
                    >
                   
                  </el-table-column>
                <el-table-column
                    prop="class"
                    label="商品类型"
                    width="150">
                    
                </el-table-column>
                <el-table-column
                    prop="select"
                    label="属性是否可选"
                    width="150">
                </el-table-column>
               <el-table-column
                    prop="method"
                    label="属性值录入方式"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="selectlist"
                    label="可选值列表"
                    width="250">
                </el-table-column>
                <el-table-column
                    prop="sort"
                    label="排序"
                    width="80">
                </el-table-column>
                  <el-table-column
                    prop="handle"
                    label="操作"
                   >
                   <el-row class="handle">
                     <el-button  size="mini" @click="edit">编辑</el-button>
                     <el-button  size="mini" style="background:#f56c6c; color:white">删除</el-button>
                   </el-row>

                  </el-table-column>
            </el-table>
            
        </div>
      <div class="foot" >    
            <div class="Batch">
                <el-select v-model="value" placeholder="批量操作" >
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
</template>

<script>
    export default {
       data() {
      return {
          value:'',
          currentPage4:4,
        formLabelWidth: '120px',
        tableData: [{
          id:'01',
          name: '颜色',
          class:'服装-T恤',
          select: '多选',
          method:'从列表中获取',
          selectlist:'黑色,红色,白色,粉色',
          sort:'100'
        }],
        options:[
            {
                value:'1',
                label:'删除'
            }
        ]
      }
    },
    methods: {
      edit(){
          this.$router.push('/updateProductAttr/id=1')
      },
      add(){
          this.$router.push('/updateProductAttr/id=1')
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      },
    
      getattrlist(){

      },
      getparameterlist(){
          
      }
    },
    }
</script>

<style>

.list,.content,.foot{
    margin-top: 20px
}
.foot{
    display: flex;
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