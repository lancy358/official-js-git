<template>
  <div>
    <el-row :gutter="0" class="total">
      <el-col :span="6" class="order">
        <div class="grid-content bg-purple">
          <i class="iconfont icon-icon-"></i>
          <div>
            <p>今日订单总数</p>
            <span>666</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="order">
        <div class="grid-content bg-purple">
          <i class="iconfont icon-xiaoshouzonge"></i>
          <div>
            <p>今日销售总额</p>
            <span>￥99999</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="order">
        <div class="grid-content bg-purple">
          <i class="iconfont icon-youhuiquan"></i>
          <div>
            <p>昨日销售总额</p>
            <span>￥88888</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-card class="box-card pending">
      <div slot="header" class="clearfix">
        <span>待处理事项</span>
      </div>
      <el-row class="obligation">
        <el-col :span="8" class="obligation1">
          <div class="grid-content bg-purple-dark">
            <span>待付款订单</span>
            <h5>（10）</h5>
          </div>
        </el-col>
        <el-col :span="8" class="obligation1">
          <div class="grid-content bg-purple-dark">
            <span>已完成订单</span>
            <h5>（10）</h5>
          </div>
        </el-col>
        <el-col :span="8" class="obligation1">
          <div class="grid-content bg-purple-dark">
            <span>待确认收货订单</span>
            <h5>（10）</h5>
          </div>
        </el-col>
      </el-row>
      <el-row class="obligation">
        <el-col :span="8" class="obligation1">
          <div class="grid-content bg-purple-dark">
            <span>待发货订单</span>
            <h5>（10）</h5>
          </div>
        </el-col>
        <el-col :span="8" class="obligation1">
          <div class="grid-content bg-purple-dark">
            <span>新缺货登记</span>
            <h5>（10）</h5>
          </div>
        </el-col>
        <el-col :span="8" class="obligation1">
          <div class="grid-content bg-purple-dark">
            <span>待处理退款申请</span>
            <h5>（10）</h5>
          </div>
        </el-col>
      </el-row>
      <el-row class="obligation">
        <el-col :span="8" class="obligation1">
          <div class="grid-content bg-purple-dark">
            <span>已发货订单</span>
            <h5>（10）</h5>
          </div>
        </el-col>
        <el-col :span="8" class="obligation1">
          <div class="grid-content bg-purple-dark">
            <span>待处理退货订单</span>
            <h5>（10）</h5>
          </div>
        </el-col>
        <el-col :span="8" class="obligation1">
          <div class="grid-content bg-purple-dark">
            <span>广告位即将到期</span>
            <h5>（10）</h5>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <div class="pandect">
      <el-card class="box-card product">
        <div slot="header" class="clearfix">
          <span>商品总览</span>
        </div>
        <div class="information">
          <div>
            <span>100</span>
            <p>今日新增</p>
          </div>
          <div>
            <span>400</span>
            <p>昨日新增</p>
          </div>
          <div>
            <span>50</span>
            <p>本月新增</p>
          </div>
          <div>
            <span>500</span>
            <p>会员总数</p>
          </div>
        </div>
      </el-card>
      <el-card class="box-card user">
        <div slot="header" class="clearfix">
          <span>用户总览</span>
        </div>
        <div class="information">
          <div>
            <span>100</span>
            <p>今日新增</p>
          </div>
          <div>
            <span>200</span>
            <p>昨日新增</p>
          </div>
          <div>
            <span>1000</span>
            <p>本月新增</p>
          </div>
          <div>
            <span>5000</span>
            <p>会员总数</p>
          </div>
        </div>
      </el-card>
    </div>
    <div class="statistics">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>订单统计</span>
        </div>
        <div class="aside">
          <div class="patch">
            <p>本月订单总数</p>
            <span class="num">10000</span>
            <div>
              <span class="hundred">+10%</span>
              <span class="compare">同比上月</span>
            </div>
          </div>
          <div class="patch">
            <p>本周订单总数</p>
            <span class="num">1000</span>
            <div>
              <span class="hundred">-10%</span>
              <span class="compare">同比上周</span>
            </div>
          </div>
          <div class="patch">
            <p>本月订单总额</p>
            <span class="num">100000</span>
            <div>
              <span class="hundred">10%</span>
              <span class="compare">同比上月</span>
            </div>
          </div>
          <div class="patch">
            <p>本周订单总数</p>
            <span class="num">50000</span>
            <div>
              <span class="hundred">-10%</span>
              <span class="compare">同比上周</span>
            </div>
          </div>
        </div>
        <div class="graph">
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
          <div class="echarts" style="margin-top:60px">
            <Echarts></Echarts>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Echarts from '../components/echarts';
   
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  },
  components:{
            Echarts
        }
};
</script>

<style >
.block {
  float: right;
}
.statistics .el-card__body {
  display: flex;
  /* height: 400px; */
  padding: 0;
}
.statistics .el-card__body .aside {
  border-right: 1px solid #ccc;
  width: 16.3%;
  display: flex;
  flex-direction: column;
}
.statistics .el-card__body .aside .patch {
  margin-left: 20px;
  margin-top: 20px;
}
.el-card__body .aside .patch p {
  color: rgb(144, 147, 153);
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.el-card__body .aside .patch .num {
  color: rgb(96, 98, 102);
  font-size: 24px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.el-card__body .aside .patch .hundred {
  font-size: 14px;
  color: #67c23a;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.el-card__body .aside .patch .compare {
  color: rgb(192, 196, 204);
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.statistics .el-card__body .graph {
  width: 83.7%;
}
.statistics {
  margin-top: 20px;
}
.information {
  display: flex;
  justify-content: space-around;
}
.information div {
  text-align: center;
  margin-top: 20px;
}
.information div p {
  font-size: 16px;
  color: #606266;
  margin-top: 10px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.information div span {
  font-size: 24px;
  text-align: center;
  color: #f56c6c;
}
.pandect .el-card__body {
  display: flex;
  flex-direction: column;
}
.pandect {
  margin-left: 100px;
  margin-right: 143px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.pandect .box-card {
  flex: 1;
  border: 1px solid #ccc;
}
.pandect .product {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
}
.pandect .user {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.pandect .user span {
  width: 100%;
}
.obligation1 div {
  display: flex;
  justify-content: space-between;
}
.obligation1 div span {
  font-size: 16px;
  color: #606266;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.obligation1 div h5 {
  font-size: 16px;
  color: #f56c6c;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.obligation {
  display: flex;
  margin-left: 0px;
  padding: 10px;
}
.obligation .el-col {
  border-bottom: 1px solid rgb(224, 223, 223);
  margin-left: 20px;
  height: 30px;
}
.pending .el-card__header,
.pandect .el-card__header,
.statistics .el-card__header {
  color: #606266;
  padding: 15px 20px;
  background: #f2f6fc;
  font-weight: 700;
}
.pandect .el-card__header {
  width: 100%;
}

.pending,
.statistics {
  margin-left: 100px;
  margin-right: 143px;
  border: 1px solid #ccc;
}
.total {
  margin-bottom: 20px;
  margin-left: 90px;
}
.order {
  border-radius: 2px;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-right: 10px;
}

.el-row .el-col-6 {
  width: 28%;
}

.order .grid-content {
  display: flex;
}
.order .grid-content .iconfont {
  font-size: 60px;
  line-height: 100px;
  margin-left: 10px;
  color: #409eff;
}
.order .grid-content div p {
  margin-top: 35px;
  margin-left: 10px;
  font-size: 17px;
  color: #909399;
}
.order .grid-content div span {
  font-size: 19px;
  color: #606266;
  margin-left: 10px;
}
.order .grid-content {
  border-radius: 4px;
  min-height: 100px;
}
</style>
