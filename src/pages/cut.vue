//about.vue
<template>
  <div class="wrap">
    <div style="width:600px">第一种方案来自于无所不能的 CSS 渐变。假设我们只需要一个角被切 掉的效果，以右下角为例。这其中最大的窍门在于充分利用渐变的一大特 性:渐变可以接受一个角度(比如 45deg)作为方向，而且色标的位置信息 也可以是绝对的长度值，这一点丝毫不受容器尺寸的影响。</div>
    <div class="cut"></div>
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
.wrap {
  font-size: 24px;
}
.cut {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, transparent 15px, #58a 0);
}
.cut2 {
  margin: 40px;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, transparent 15px, #58a 0) left top,
    linear-gradient(-135deg, transparent 15px, #58a 0) right top,
    linear-gradient(-45deg, transparent 15px, #58a 0) right bottom,
    linear-gradient(45deg, transparent 15px, #58a 0) left bottom;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
</style>
