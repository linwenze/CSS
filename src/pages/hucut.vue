//about.vue
<template>
  <div class="wrap">
    <div style="width:600px"></div>
    <div class="cut"></div>
    <!-- <div class="cut"></div> -->
    <div class="cut2"></div>
  </div>
</template>  
<script>
export default {
  name: "hello",
  components: {},
  mounted() {},
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {}
};
</script>
<style scope>
body{background: grey;}
.wrap {
  font-size: 24px;
}
.cut {
  width: 100px;
  height: 100px;
 background:
    radial-gradient(ellipse at center center,
             transparent 16px, #fff 0) top left,
    radial-gradient(ellipse at center right,
             transparent 16px, #fff 0) top right;
background-size: 50% 100%; background-repeat: no-repeat;
}

/* .cut2 {
  margin: 40px;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, transparent 15px, #58a 0) left top,
    linear-gradient(-135deg, transparent 15px, #58a 0) right top,
    linear-gradient(-45deg, transparent 15px, #58a 0) right bottom,
    linear-gradient(45deg, transparent 15px, #58a 0) left bottom;
  background-size: 50% 50%;
  background-repeat: no-repeat;
} */
</style>
