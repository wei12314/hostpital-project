<template>
  <el-card class="box-card card-main">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="房间号" width="180" />
      <el-table-column prop="temp" label="温度°C" width="180" />
      <el-table-column prop="humity" label="湿度%RH" />
      <el-table-column prop="smoke" label="烟雾ppm" />
    </el-table>
  </el-card>
</template>

<script>
import { useStore, mapState } from "vuex";
export default {
  name: "RoomEnvView",
  setup() {
    const store = useStore();
    let room = store.state.room;
    const tableData = [
      // {
      //   id: "1",
      //   temp: "25",
      //   humity: "111",
      //   smoke: "123",
      // },
      {
        id: "2",
        temp: "25",
        humity: "111",
        smoke: "123",
      },
      {
        id: "3",
        temp: "25",
        humity: "111",
        smoke: "123",
      },
      {
        id: "4",
        temp: "25",
        humity: "111",
        smoke: "123",
      },
      {
        id: "5",
        temp: "25",
        humity: "111",
        smoke: "123",
      },
      {
        id: "6",
        temp: "25",
        humity: "111",
        smoke: "123",
      },
    ];
    tableData.unshift(room);
    return { tableData };
  },
};
</script>

<style scoped></style>
