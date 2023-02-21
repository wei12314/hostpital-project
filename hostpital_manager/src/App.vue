<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="side-bar"><NavBar /> </el-aside>
      <el-container class="main-content">
        <el-header class="header">智慧病房环境监测系统</el-header>
        <el-main class="content">
          <BreadCrumb />
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import BreadCrumb from "./components/BreadCrumb.vue";
export default {
  components: {
    NavBar,
    BreadCrumb,
  },
  setup() {},
};
</script>

<style scoped>
.card-main {
  margin-top: 20px;
}
.side-bar {
  margin-left: -8px;
  margin-top: -8px;
  height: 100vh;
  background-color: #f4f4f5;
}
.main-content {
  width: 100vh;
  height: 100vh;
  margin-top: -8px;
}

.content {
  background-color: #e9e9eb;
}

.header {
  background-color: #73767a;
  font-size: 30px;
  color: #e9e9eb;
}

::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
