//about.vue
<template>
  <div>
    <div class="note">使用 background-clip: padding-box;属性避免背景色污染边框透明</div>
    <div class="border-normal"></div>
    <div class="border-clip"></div>
    <a href="http://www.baidu.com"></a>
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
a:after { content: attr(href); font-size: 12px; }
.border-normal{
   border: 10px solid rgba(0,0,0,0.5);
  background: red;
  width: 100px;
  height: 100px;
  margin:30px;
}
.border-clip {
  border: 10px solid rgba(0,0,0,0.5);
  background: red;
  background-clip: padding-box;
  width: 100px;
  height: 100px;
  margin:30px;
}
</style>
