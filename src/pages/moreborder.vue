//about.vue
<template>
  <div>
    <div class="something-meaningful">
      <div> 效果果，使用DIV包裹DIV实现效果果，使用DIV包裹DIV实现
      </div>
    </div>
    <div class="out-line">
      使用out-line外边框 box-shadow：使用圆角的一半填充缺少角

    </div>
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
.something-meaningful {
  background: #655;
  padding: 10px;
  width: 300px;
  margin: 10px;
}
.something-meaningful > div {
  background: tan;
  border-radius: 10px;
  padding: 1em;
}

.out-line {
  background: tan;
  border-radius: 10px;
  padding:10px;
  width:280px;
  margin: 20px;

  box-shadow: 0 0 0 5px #655;
  outline:10px solid #655;
}
</style>
