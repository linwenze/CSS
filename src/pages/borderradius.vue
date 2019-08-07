//about.vue
<template>
  <div class="wrap">
    <div class="borderradius"></div>
     <div class="borderradius2"></div>
      <div class="borderradius3"></div>
    
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
.wrap{font-size:24px}
.borderradius{
  width:200px;
  height:200px;
  margin:30px;
  background: yellow;
  /* border-radius: 100px; */
  border-radius:  50% / 100% 100% 0 0;
}
.borderradius2{
  width:200px;
  height:200px;
  margin:30px;
  background: yellow;
  /* border-radius: 100px; */
  border-radius:  100% 0 0 100% / 50%;
}
.borderradius3{
  width:200px;
  height:200px;
  margin:30px;
  background: yellow;
  /* border-radius: 100px; */
  border-radius:  100% 0 0 0;
}



</style>
