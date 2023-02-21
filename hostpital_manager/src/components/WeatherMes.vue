<template>
  <div id="he-plugin-standard"></div>
</template>

<script>
window.WIDGET = {
  CONFIG: {
    layout: "1",
    width: 700,
    height: 150,
    background: "2",
    dataColor: "000000",
    language: "zh",
    borderRadius: "5",
    city: "CN101180509",
    key: "f20e04f2ff94444c82a290f71910aff3",
  },
};
import { defineComponent, ref, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  setup() {
    onMounted(() => {
      weather();
    });
    const weather = () => {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src =
        "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
      document.body.appendChild(s);
    };

    return {};
  },
});
</script>
