<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
  >
    <el-menu-item index="/">
      <el-icon><House /></el-icon>
      <span>主页</span>
    </el-menu-item>
    <el-sub-menu index="/room">
      <template #title>
        <el-icon><PriceTag /></el-icon>
        <span>病房</span>
      </template>
      <el-menu-item index="/room/enviroment">病房环境</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/patient">
      <template #title>
        <el-icon><User /></el-icon>
        <span>患者</span>
      </template>
      <el-menu-item index="/patient-message">患者输液情况</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.el-menu-vertical-demo {
  background-color: #f4f4f5;
}
</style>
