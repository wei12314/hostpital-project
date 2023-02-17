<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item
      v-for="path in arr_path"
      :key="path.id"
      :to="{ path: '/' }"
      >{{ path }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "BreadCrumb",
  setup() {
    const route = useRoute();
    onMounted(() => {
      console.log(arr_path);
    });
    let all_path = route.path;
    let arr_path = all_path.split("/").filter((path) => {
      return path !== "";
    });
    return {
      arr_path,
    };
  },
};
</script>

<style scoped>
.breadcrumb {
  background-color: #eebe77;
  padding: 10px 0;
  border-radius: 5px;
  padding-left: 5px;
}
</style>
