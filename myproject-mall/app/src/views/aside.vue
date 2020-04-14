<template>
  <div class="aside">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="collApse"
      router
      
    >
      <el-menu-item index="/home">
        <i class="iconfont icon-yemian-copy-copy"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-shangpin"></i>
          <span slot="title">商品</span>
        </template>
        <el-menu-item index="/product/list">
          <i class="iconfont icon-liebiao"></i>
          <span slot="title">商品列表</span>
        </el-menu-item>
        <el-menu-item index="/product/add">
          <i class="iconfont icon-tianjiashangpin"></i>
          <span>添加商品</span>
        </el-menu-item>
        <el-menu-item index="/product/class">
          <i class="iconfont icon-shangpinfenlei"></i>
          <span>商品分类</span>
        </el-menu-item>
        <el-menu-item index="/product/type">
          <i class="iconfont icon-shangpinleixing"></i>
          <span>商品类型</span>
        </el-menu-item>
        <el-menu-item index="/product/mangement">
          <i class="iconfont icon-pinpaiguanli"></i>
          <span>品牌管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-icon-"></i>
          <span slot="title">订单</span>
        </template>
        <el-menu-item index="2-1">
          <i class="iconfont icon-liebiao"></i>
          <span>订单列表</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="iconfont icon-shangpinshezhi"></i>
          <span>订单设置</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="iconfont icon-tuihuoshenqing"></i>
          <span>退货申请处理</span>
        </el-menu-item>
        <el-menu-item index="2-4">
          <i class="icon-tuihuoyuanyin"></i>
          <span>退货原因设置</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont icon-labayinliang"></i>
          <span slot="title">营销</span>
        </template>
        <el-menu-item index="3-1">
          <i class="iconfont icon-miaosha"></i>
          <span>秒杀活动列表</span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="iconfont icon-youhuiquan"></i>
          <span>优惠券列表</span>
        </el-menu-item>
        <el-menu-item index="3-3">
          <i class="iconfont icon-pinpaiguanli"></i>
          <span>品牌推荐</span>
        </el-menu-item>
        <el-menu-item index="3-4">
          <i class="iconfont"></i>
          <span>新品推荐</span>
        </el-menu-item>
        <el-menu-item index="3-5">
          <i class="iconfont"></i>
          <span>人气推荐</span>
        </el-menu-item>
        <el-menu-item index="3-6">
          <i class="iconfont"></i>
          <span>专题推荐</span>
        </el-menu-item>
        <el-menu-item index="3-7">
          <i class="iconfont icon-xiaoshouzonge"></i>
          <span>广告列表</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["collApse"]
};
</script>

<style >
@import "../assets/font_1606319_c0x877lsht8/iconfont.css";
  .el-menu {
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.el-submenu i {
  margin-right: 20px;
}
 .el-menu::-webkit-scrollbar {
  display: none;
}
.breadcrumb {
  display: flex;
  margin-top: 20px;
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
}
.breadcrumb .el-radio-group {
  margin-left: 10px;
}
.el-menu-item span {
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
}
.el-submenu span {
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
}
.el-menu-item {
  font-size: 15px;
  font-family: "Courier New", Courier, monospace;
}
.el-menu-item i {
  margin-right: 20px;
}
.el-avatar .el-aside {
  background-color: #304156;
  color: #333;
  height: 100vh;
  font-family: Courier New;
  font-size: 16px;
}
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  background-color: #304156;
}
</style>