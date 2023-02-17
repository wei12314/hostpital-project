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
      <el-menu-item index="/patient-message">患者信息</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>主页</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="4" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><Search /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.el-menu-vertical-demo {
  background-color: #e9e9eb;
}
</style>
