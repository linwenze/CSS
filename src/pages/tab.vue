//about.vue
<template>
  <div class="wrap">

    <nav>
      <a>Home</a>
      <a>About</a>
      <a>Contect</a>
    </nav>
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
nav > a {
  float: left;
  position: relative;
  display: inline-block;
  padding: 0.3em 1em 0;
}
nav > a::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #ccc;
  background-image: linear-gradient(
    hsla(0, 0%, 100%, 0.6),
    hsla(0, 0%, 100%, 0)
  );
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-bottom: none;
  border-radius: 0.5em 0.5em 0 0;
  box-shadow: 0 0.15em white inset;
  transform: perspective(0.5em) rotateX(5deg);
  transform-origin: bottom;
}
</style>
