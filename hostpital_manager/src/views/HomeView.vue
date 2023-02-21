<template>
  <el-card class="box-card card-main">
    <div>
      <el-row :gutter="0">
        <el-col :span="3"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="6"
          ><div class="grid-content ep-bg-purple" />
          <WeatherMes
        /></el-col>
        <el-col :span="3"><div class="grid-content ep-bg-purple" /></el-col>
      </el-row>
    </div>
    <EchartImg />
  </el-card>
</template>

<script>
import WeatherMes from "../components/WeatherMes.vue";
import EchartImg from "../components/EchartImg.vue";
import { useStore, mapState } from "vuex";
export default {
  name: "HomeView",
  components: { WeatherMes, EchartImg },
  setup() {
    const store = useStore();
    let patient = {};
    let room = {};
    let temp = "";
    let humity = "";
    let smoke = "";
    let people_temp = "";
    let is_pass = false;
    const getMes = function () {
      let mes;
      var api = new OneNetApi("Ol2qY4SS8ASwKcj=RNFQFzixYO8=");
      api.getDataStreams(921305337).done(function (data) {
        mes = data.data;
        temp = mes[0].current_value;
        console.log(mes[0].current_value, temp);
        humity = mes[1].current_value;
        smoke = mes[2].current_value;

        people_temp = mes[3].current_value;
        is_pass = mes[5].current_value === "Y" ? true : false;

        patient = {
          id: 1,
          username: "张三",
          temp: people_temp,
          is_pass: is_pass,
        };

        room = {
          id: 1,
          temp: temp,
          humity: humity,
          smoke: smoke,
        };
        //console.log(temp, humity, smoke, people_temp, is_pass, patient, room);
        store.commit("savePatient", patient);
        store.commit("saveRoom", room);
      });
    };
    console.log(temp);

    setInterval(getMes, 1000);
  },
};
</script>

<style scoped>
.weather-position {
  margin: auto 0;
}
</style>
