//about.vue
<template>
  <div >
    <div class="note">用 box-shadow 来模拟多个外框，outline只能设置一个边框</div>
    <div class="box-shadow">box-shadow</div>
    <div class="out-line">outline</div>
    <div style="font-size:30px">
    <div>语法box-shadow: h-shadow v-shadow blur spread color inset;</div>
    <table class="dataintable">
      <tbody>
        <tr>
          <th style="width:25%;">值</th>
          <th>描述</th>
          <th style="width:8%;">测试</th>
        </tr>

        <tr>
          <td><i>h-shadow</i></td>
          <td>必需。水平阴影的位置。允许负值。</td>
          <td><a
              target="_blank"
              href="/tiy/c.asp?f=css_box-shadow"
            >测试</a></td>
        </tr>

        <tr>
          <td><i>v-shadow</i></td>
          <td>必需。垂直阴影的位置。允许负值。</td>
          <td><a
              target="_blank"
              href="/tiy/c.asp?f=css_box-shadow"
            >测试</a></td>
        </tr>

        <tr>
          <td><i>blur</i></td>
          <td>可选。模糊距离。</td>
          <td><a
              target="_blank"
              href="/tiy/c.asp?f=css_box-shadow&amp;p=3"
            >测试</a></td>
        </tr>

        <tr>
          <td><i>spread</i></td>
          <td>可选。阴影的尺寸。</td>
          <td><a
              target="_blank"
              href="/tiy/c.asp?f=css_box-shadow&amp;p=7"
            >测试</a></td>
        </tr>

        <tr>
          <td><i>color</i></td>
          <td>可选。阴影的颜色。请参阅 CSS 颜色值。</td>
          <td><a
              target="_blank"
              href="/tiy/c.asp?f=css_box-shadow&amp;p=10"
            >测试</a></td>
        </tr>

        <tr>
          <td>inset</td>
          <td>可选。将外部阴影 (outset) 改为内部阴影。</td>
          <td><a
              target="_blank"
              href="/tiy/c.asp?f=css_box-shadow&amp;p=15"
            >测试</a></td>
        </tr>
      </tbody>
    </table>
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
.border-normal {
  border: 10px solid rgba(0, 0, 0, 0.5);
  background: red;
  width: 100px;
  height: 100px;
  margin: 30px;
}
.box-shadow {
  background: yellowgreen;
  box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink,
    0 2px 5px 15px rgba(0, 0, 0, 0.6);
  /* outline: 5px solid red; */
  width: 100px;
  height: 100px;
  margin: 100px;
}
.out-line {
  background: yellowgreen;
  outline: 5px solid red;
  width: 100px;
  height: 100px;
  margin: 100px;
}
</style>
