<template>
  <div>
    <el-container>
      <el-aside width>
        <Aside :collApse="isCollapse"></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <div class="breadcrumb">
            <el-radio-group v-model="isCollapse">
              <span
                :class="isCollapse?'iconfont icon-shousuo2':'iconfont icon-shousuo'"
                @click="changeCollapse"
              ></span>
            </el-radio-group>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              
              <el-breadcrumb-item><a href="javascript:;">商品</a></el-breadcrumb-item>
              <el-breadcrumb-item>商品列表</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="user Div" @click="layout">
            <div>欢迎 回来</div>
            <el-avatar class="iconfont icon-yonghu"></el-avatar>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
    
<script>
import { loginout } from "../api/api";
import Aside from "../views/aside";
export default {
  data() {
    return {
      isCollapse: false
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    async layout() {
      const data = await loginout();
      console.log(111);
      if (data.code === 0) {
        sessionStorage.setItem("token", "");
        this.$router.push("/admin");
      }
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  },
  components: {
    Aside
  }
};
</script>

<style  >
@import "../assets/font_1606319_c0x877lsht8/iconfont.css";
body{
  margin:0;
  padding:0;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}
.box {
  display: flex;
  justify-content: space-between;
}
.box .el-card {
  height: 100px;
  flex: 1;
  margin-right: 20px;
  border: 1px solid #ccc;
}
.box-c1 {
  display: flex;
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
  clear: both;
}

.main {
  margin-left: 100px;
  margin-right: 100px;
}

.el-container {
  height: 100vh;
}
.el-header {
  border: 1px solid #ccc;
  border-top: none;
  color: #333;
  text-align: center;
  line-height: 50px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0;
}
.Div {
  margin-right: 10px;
}
.breadcrumb {
  display: flex;
  margin-top: 20px;
  font-size: 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.breadcrumb .el-breadcrumb {
  margin-left: 20px;
}
.el-header div .el-avatar {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  line-height: 50px;
}

.el-header div .el-radio-button .iconfont {
  font-size: 20px;
  color: gray;
}
.user {
  display: flex;
}
.Div div {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #333;
  margin-top: 6px;
}
.user .iconfont {
  font-size: 30px;
}
.el-avatar.el-aside {
  background-color: #304156;
  color: #333;
  height: 100vh;
  font-family: Courier New;
  font-size: 16px;
}

.el-avatar {
  margin-top: 5px;
}
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  background-color: #304156;
}
.el-main {
  
  color: #333;

}

.icon-shousuo1,
.icon-shousuo {
  color: rgb(85, 83, 83);
  font-size: 16px;
}
.search {
  width: 100%;
  /* height: 150px; */
  border: 1px solid rgb(240, 238, 238);
  border-radius: 5px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
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
  clear: both;
}
.el-card__header {
  height: 50px;
  /* text-align: center */
}
.box-card .el-button {
  margin-right: 10px;
  margin-top: -15px;
}
.search .el-form {
  margin-left: 50px;
  padding: 5px 80px;
  margin-top: -8px;
  margin-bottom: -18px;
}
.el-form-item {
  margin-bottom: 17px;
}
.el-input--suffix .el-input__inner {
  width: 203px;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  box-shadow: none;
}
.search .el-card {
  border: none;
}
.list .el-card {
  border: 1px solid rgb(240, 238, 238);
  border-radius: 5px;
  margin-top: 10px;
  height: 60px;
}
.list .box-card .el-button {
  margin-top: -10px;
}
.listContent {
  border: 1px solid rgb(240, 238, 238);
  border-radius: 5px;
  margin-top: 10px;
}
</style>