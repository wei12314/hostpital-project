<template>
  <el-card class="box-card card-main">
    <div v-for="o in 4" :key="o" class="text item">
      {{ "List item " + o }}
    </div>
    HomePage
  </el-card>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped></style>
