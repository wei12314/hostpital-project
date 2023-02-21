<template>
  <el-row class="row-bg patient-pos" justify="space-around">
    <el-col v-for="patient in patients_1" :key="patient.id" :span="6"
      ><el-card class="box-card card-main">
        <h3>姓名：{{ patient.username }}</h3>
        <p>体温：{{ patient.temp }}°C</p>
        <p>
          输液状态：<span v-if="patient.is_pass === true">正在输液中</span>
          <span v-if="patient.is_pass !== true">输液结束</span>
        </p>
      </el-card></el-col
    >
  </el-row>
  <button @click="on"></button>
</template>

<script>
import { ElNotification } from "element-plus";
import { useStore, mapState } from "vuex";
export default {
  name: "PatientMessageView",
  setup() {
    const store = useStore();
    let patient = store.state.patient;
    let patients_1 = [
      { id: 2, username: "李四", temp: 37, is_pass: true },
      { id: 3, username: "小王", temp: 38, is_pass: false },
    ];
    patients_1.unshift(patient);
    let patients_2 = [
      { id: 1, username: "李四", temp: 37, is_pass: true },
      { id: 4, username: "王五", temp: 37, is_pass: true },
      { id: 5, username: "小明", temp: 38, is_pass: false },
    ];
    const on = () => {
      patient.is_pass = false;
    };
    const open1 = () => {
      ElNotification({
        title: "Success",
        message: "张三输液结束",
        type: "success",
      });
    };
    const check = () => {
      if (!patient.is_pass) {
        open1();
        patient.is_pass = true;
      }
    };
    setInterval(check, 1000);
    return {
      patients_1,
      on,
    };
  },
};
</script>

<style scoped>
.patient-pos {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
