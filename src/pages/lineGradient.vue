//about.vue
<template>
  <div class="wrap">
    水平条纹
    <div class="lineGradient">
    </div>
    垂直条纹
    <div class="lineGradient2"></div>
    斜向条纹
    <div class="lineGradient3"></div>
    <div class="lineGradient4"></div>
    <div class="lineGradient5"></div>
    <div class="lineGradient6"></div>
    <div class="lineGradient7"></div>
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
.wrap {
  font-size: 24px;
}
.lineGradient {
  width: 300px;
  height: 400px;
  background: linear-gradient(#fb3 50%, #58a 50%);
  border: 2px solid #000;
  background-size: 30px 30px;
  /* background-repeat:no-repeat;  */
  /* background-position:center; */
}
.lineGradient2 {
  width: 300px;
  height: 400px;
  background: linear-gradient(to right, #fb3 50%, #58a 0);
  background-size: 30px 30px;
  /* background-repeat: no-repeat */
}
.lineGradient3 {
  width: 300px;
  height: 400px;
  background: linear-gradient(
    45deg,
    #fb3 0,
    #fb3 25%,
    #58a 0,
    #58a 50%,
    #fb3 0,
    #fb3 75%,
    #58a 0,
    #58a 100%
  );
  /* background-repeat: no-repeat; */
  background-size: 30px 30px;
  /* background-repeat: no-repeat */
}
.lineGradient4 {
  width: 315px;
  height: 400px;
  background-color: white;
  background-image: linear-gradient(
      90deg,
      rgba(200, 0, 0, 0.5) 50%,
      transparent 0
    ),
    linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 0);
  background-size: 30px 30px;
}
.lineGradient5 {
  width: 315px;
  height: 400px;
  background: linear-gradient(
    90deg,
    #fb3 0,
    #fb3 15%,
    #655 0,
    #655 40%,
    #ab4 0,
    #ab4 65%,
    hsl(20, 40%, 90%) 0
  );
  background-size: 80px 100%;
}
.lineGradient6 {
  width: 315px;
  height: 400px;
  background: hsl(20, 40%, 90%);
  background-image: linear-gradient(90deg, #fb3 11px, transparent 0),
    linear-gradient(90deg, #ab4 23px, transparent 0),
    linear-gradient(90deg, #655 41px, transparent 0);
  background-size: 141px 100%, 61px 100%, 83px 100%;
}
.lineGradient7 {
  width: 315px;
  height: 400px;
  border: 16px solid transparent;
  border-image: 16
    repeating-linear-gradient(
      -45deg,
      red 0,
      red 20px,
      transparent 0,
      transparent 40px,
      #58a 0,
      #58a 60px,
      transparent 0,
      transparent 80px
    ) ;
}
</style>
